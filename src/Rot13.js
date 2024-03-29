import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Rot13 extends Component {


    constructor(props) {
        super(props);

        this.state = {
            value: 'Rot-13',
            newValue: ''
        }
    }

    toRot13() {

        // Wrap the amount
        var amount = 13;
        var str = this.state.newValue;
        if (amount < 0)
            return (str, amount + 26);

        // Make an output variable
        var output = '';

        // Go through each character
        for (var i = 0; i < str.length; i++) {

            // Get the character we'll be appending
            var c = str[i];

            // If it's a letter...
            if (c.match(/[a-z]/i)) {

                // Get its code
                var code = str.charCodeAt(i);

                // Uppercase letters
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

                // Lowercase letters
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

            }

            // Append
            output += c;
            // console.log(output);
        }

        // All done!
        // return output;
        this.setState({ value: output })

    }

    returnBackRot13() {
        // Wrap the amount
        var amount = 13;
        var str = this.state.value;
        if (amount < 0)
            return (str, amount - 26);

        // Make an output variable
        var output = '';

        // Go through each character
        for (var i = 0; i < str.length; i++) {

            // Get the character we'll be appending
            var c = str[i];

            // If it's a letter...
            if (c.match(/[a-z]/i)) {

                // Get its code
                var code = str.charCodeAt(i);

                // Uppercase letters
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

                // Lowercase letters
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

            }

            // Append
            output += c;
            // console.log(output);
        }

        // All done!
        // return output;
        this.setState({ value: output })

    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <Form inline>
                    <FormControl
                        onChange={event => this.setState({ newValue: event.target.value })}
                        placeholder="input value without space"
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.toRot13()
                            }
                        }}
                    />
                </Form>
                <Button onClick={() => this.toRot13()}>Convert to Rot-13</Button>
                <Button onClick={() => this.returnBackRot13()}>Return Back</Button>
            </div>
        )
    }
}

export default Rot13;
