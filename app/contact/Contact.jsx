'use client'
import React, { useState } from 'react'
import { db } from '../../src/config/Config';
import { useRouter } from 'next/navigation';
import { sendEmail } from '../api/route';

import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Spinner
} from "@material-tailwind/react";

const PLACEHOLDER_QUESTION = 'Any questions, comments, or inquiries? Please include your email so that we can respond ASAP! ';

const labelProps = { className: "before:content-none after:content-none" };

const Contact = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendEmail({
                to: 'wiredtoburn@gmail.com',
                subject: `New Form Submission from ${name || 'a user'} `,
                text: `You received a form submission from ${name || 'a user'}!\nEmail: ${email || 'No email provided'}\nQuestion/Comment: ${content || 'No content provided'}`
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }

        try {
            await db.collection('formSubmission').add({ name, content, email, date: Date.now() });
            alert('Form Submitted! We will get back to you ASAP');
            router.push('/');
        } catch (error) {
            console.error(error.message);
            alert(`Error submitting form: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='flex justify-center mt-4'>
            {loading ? (
                <Spinner />
            ) : (
                <Card color="white" shadow={false} className='min-w-fit p-11'>
                    <Typography variant="h4" color="blue-gray">
                        Have a Question?
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter any question or comment below. <br /> Please include your email so that we can respond ASAP
                    </Typography>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                type="text"
                                placeholder="Ronnie James Dio"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                labelProps={labelProps}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                type="email"
                                placeholder="LemmieIsGod@rock.com"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                labelProps={labelProps}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Question/Comment/Inquiry
                            </Typography>
                            <Textarea
                                size="lg"
                                placeholder={PLACEHOLDER_QUESTION}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                                labelProps={labelProps}
                            />
                            <Button className="mt-6" fullWidth type="submit">
                                Submit
                            </Button>
                        </div>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Prefer to email?{" "}
                            <a href="mailto:wiredtoburn@gmail.com?subject=I have an inquiry about Wired to Burn..." className="text-blue-500 font-bold">Click Here</a>
                        </Typography>
                    </form>
                </Card>
            )}
        </div>
    );
};

export default Contact;

