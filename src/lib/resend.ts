import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactNotification = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  locale: string;
}) => {
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: 'info@kenekita.com', // Replace with actual recipient
      subject: `Nuova richiesta di contatto da ${data.name}`,
      html: `
        <h2>Nuova richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefono:</strong> ${data.phone}</p>` : ''}
        <p><strong>Lingua:</strong> ${data.locale}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendBookingNotification = async (data: {
  propertySlug: string;
  name: string;
  email: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message?: string;
  locale: string;
}) => {
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: 'info@kenekita.com', // Replace with actual recipient
      subject: `Nuova richiesta di prenotazione - ${data.propertySlug}`,
      html: `
        <h2>Nuova richiesta di prenotazione</h2>
        <p><strong>Struttura:</strong> ${data.propertySlug}</p>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefono:</strong> ${data.phone}</p>` : ''}
        <p><strong>Check-in:</strong> ${data.checkIn}</p>
        <p><strong>Check-out:</strong> ${data.checkOut}</p>
        <p><strong>Ospiti:</strong> ${data.guests}</p>
        <p><strong>Lingua:</strong> ${data.locale}</p>
        ${data.message ? `<p><strong>Messaggio:</strong></p><p>${data.message}</p>` : ''}
      `,
    });
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
