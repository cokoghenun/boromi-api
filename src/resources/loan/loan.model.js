import mongoose from 'mongoose'

const loanSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    plan: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    paymentperiod: {
      type: String,
      required: true
    },
    paymentamount: {
      type: Number,
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
