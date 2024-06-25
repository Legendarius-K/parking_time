'use server';
import { Resend } from 'resend';
import Newsletter from '../../../components/email/New_Subscriber_Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export const POST = async (formData: FormData) => {
    console.log("The Server is running");
    const UserEmail = formData.get('UserEmail');

    if (!UserEmail || typeof UserEmail !== 'string' || !UserEmail.includes('@')) {
        console.error("Invalid email:", UserEmail);
        return {
            error: "Invalid email"
        };
    }

    try {
        const response = await resend.emails.send({
            from: 'Subscription Form <onboarding@resend.dev>',
            to: UserEmail,
            subject: 'Welcome to Parking Time!',
            reply_to: UserEmail,
            react: <Newsletter />,
        });
        console.log("Email sent successfully:", response);
        return { success: true };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false };
    }
};
