import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    firstname: {
      trim: true,
      type: String,
      required: true,
      lowercase: true
    },
    lastname: {
      trim: true,
      type: String,
      required: true,
      lowercase: true
    },
    email: {
      trim: true,
      unique: true,
      type: String,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }

    this.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }

      resolve(same)
    })
  })
}

userSchema.virtual('name').get(function() {
  return `${this.firstname} ${this.lastname}`
})

export const User = mongoose.model('user', userSchema)
