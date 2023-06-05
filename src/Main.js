import React from 'react';
import HornedBeast from './HornedBeast';

// Goat picture from rurallivingtoday.com
// Impala picture from wikipedia
// Deer picture I could not figure out it was on a drive I could not figure out who to source.

class Main extends React.Component {
    render() {
        return (
            <>
            <HornedBeast title="Deer" description="Deer with moose antlers" image_url="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS3BUm0m7OZoTynaKvE_nXNKdVrjKSLDtDtby2RFNF7jagoBEyII37ExvVP0fjPDiGTKtHTWOAy1ah56vczOeAaG0c2cixVaGAkvidbBUNV" />
            <HornedBeast title="Impala" description="A long faced animal with horns almost twice the length of it's face" image_url="https://upload.wikimedia.org/wikipedia/commons/5/53/Male_impala_profile.jpg" />
            <HornedBeast title="Goat" description="A dopey looking white goat staring at the camera" image_url="https://rurallivingtoday.com/wp-content/uploads/animals-with-horns-1.jpeg" />
            </>
        )
    }
}

export default Main;