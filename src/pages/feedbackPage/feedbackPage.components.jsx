import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import './feedbackPage.styles.scss';

class FeedbackPage extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            feedback: '',
        }
    }

    // handleSubmit = async event => {
    //     event.preventDefault();
    //     this.setState({
    //         name: '',
    //         email: '',
    //         feedback: '',
    //     });
    //     console.log(this.state)
    //     alert('feedback submitted successfully')
    // }

    
//      {/* <!-- optional, prevents the submit button from being pressed more than once -->
//                 <script>
//                     var submitButton = document.getElementById("submit_form");
//                     var form = document.getElementById("email_form");
//     form.addEventListener("submit", function (e) {
//                         setTimeout(function () {
//                             submitButton.value = "Sending...";
//                             submitButton.disabled = true;
//                         }, 1);
//     });
// </script>  */}
    

// onSubmit = (e) => {
//     e.target.value = "Sending...";
//     e.target.value = "Sent...";
//     };


    render() {
        const { name, email, feedback } = this.state;
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
                    <p>Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>
                </form>

            </div>
        );
    }
}


export default FeedbackPage;