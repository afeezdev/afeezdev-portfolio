import React from 'react';
import './feedbackPage.styles.scss';

const FeedbackPage = () => {
        return (
            <div className='feedback d-flex justify-content-center '>
                <form  action="https://postmail.invotes.com/send"
                    method="post" id="email_form"
                >

                    <input id="name-input" type="text" name="subject" placeholder="Name"  required/>
                    <textarea id="feedback-field" name="text" placeholder="Feedback" required></textarea>
                    <input type="hidden" name="access_token" value="xwgvro72nkj7vd43xcnnplsx" />
                    <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                    <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
                    <div>
                    <input id="submit_form" type="submit" value="Send" 
                    />  
                    </div>
                    <p>Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noopener noreferrer">PostMail</a></p>
                </form>
            </div>
        );
    }
export default FeedbackPage;