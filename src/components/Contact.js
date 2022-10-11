import React from "react";
import { Container, TextInput,Select,Button,Textarea,Section,Icon,Checkbox,Row,Col } from "react-materialize";
export default function Contact() {
    const handleSubmit=(e)=> {
        e.preventDefault()
    }
    return (
        // <section id="contact" class="contact-section">
        //     <div class="contact-section-header">
        //         <h2>Please contact us :</h2>
        //         <h2> hiepnguyen11702@gmail.com </h2>
        //     </div>
        //     <div class="contact-links">
        //         <a href="https://facebook.com/freecodecamp" target="_blank" class="btn contact-details"><i
        //             class="fab fa-facebook-square"></i> Facebook</a>
        //         <a id="profile-link" href="https://github.com/freecodecamp" target="_blank" class="btn contact-details"><i
        //             class="fab fa-github"></i> GitHub</a>
        //         <a href="https://twitter.com/freecodecamp" target="_blank" class="btn contact-details"><i
        //             class="fab fa-twitter"></i> Twitter</a>
        //         {/* <a href="mailto:example@example.com" class="btn contact-details"><i class="fas fa-at"></i> Send a mail</a> */}
        //         <a href="tel:0343279745" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Call me</a>
        //     </div>
        // </section>
        <Container>
            <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id="TextInput-38" label="Your name"></TextInput>
                <TextInput id="TextInput-39" label='Your phone'></TextInput>
                <TextInput email id="TextInput-41" label="Email" validate/>
                <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
                    <option disabled value="">
                        Choose your favourite nation
                    </option>
                    <option value="1">
                        England
                    </option>
                    <option value="2">
                        France
                    </option>
                    <option value="3">
                        Spain
                    </option>
                </Select>
                <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content"/>
                <Button>Submit</Button>
            </form>
        </Container>
    );
}