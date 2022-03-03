import {model, Schema, Document} from 'mongoose'

export interface PAreservation extends Document{
    numberOfGuest: number,
    namePark: string,
    dia: Date
}

const reservationSchema = new Schema({
    numberOfGuest: {
        type: Number,
        required: true,
    },
    namePark: {
        type: String,
        required: true,
    },
    dia: {
        type: Date,
        required:true
    }
})

export default model<PAreservation>('Reservation', reservationSchema);
