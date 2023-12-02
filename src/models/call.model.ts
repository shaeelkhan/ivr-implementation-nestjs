// src/call/call.model.ts
import { Schema, Document } from 'mongoose';

export interface Call extends Document {
  to: string;
  from: string;
  status: string;
  duration: number;
  voicemailUrl: string | null;
}

export const CallSchema = new Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  status: { type: String, required: true },
  duration: { type: Number, required: true },
  voicemailUrl: { type: String, default: null },
});
