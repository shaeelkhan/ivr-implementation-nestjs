// voicemail.model.ts
import { Schema, Document } from 'mongoose';

export interface Voicemail extends Document {
    from: string;
    message: string;
    timestamp: Date;
}

export const VoicemailSchema = new Schema({
    from: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});
