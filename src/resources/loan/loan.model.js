import mongoose from 'mongoose'

const loanSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdBy: {
      ref: 'user',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    }
  },
  { timestamps: true }
)

export const Loan = mongoose.model('loan', loanSchema)
