import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name must be contain at least 3 character"],
        maxLength: [30, "First Name cannot exceed 30 character"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name must be contain at least 3 character"],
        maxLength: [30, "Last Name cannot exceed 30 character"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],  
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Number must be contain only 11 digits!"],
        maxLength: [11, "Number must be contain only 11 digits!"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);