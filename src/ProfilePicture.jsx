function ProfilePicture() {

    const handleClick = (e) => e.target.style.display = "none";

    return(
            <img
            onClick={ (e) => handleClick(e) }
            src="https://scontent-qro3-1.xx.fbcdn.net/v/t39.30808-6/513901183_10172807763470713_8275153118732441218_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9Q7p5AaemDsQ7kNvwHH85R9&_nc_oc=AdlqFjFtx6130GUWUuWkVCaaswonnmafsSYwc5UfF-Ph4FNFDhfSUJZM2OfxbxvENXm7LeEwpo4Zu7fuYt6-Uo7X&_nc_zt=23&_nc_ht=scontent-qro3-1.xx&_nc_gid=72Iatb8hkoCQO_EkoVEqTg&oh=00_AfnWcZ0sZHi1rLUYo3SfFlpM7UVRAG0eyLVx0JdW39FOlw&oe=695B1494"
            alt="Kanami's Profile Picture"
            />
            );
}

export default ProfilePicture