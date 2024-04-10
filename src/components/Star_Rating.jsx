import React, { useState } from "react"; // Import React and useState hook
import { FaStar } from "react-icons/fa"; // Import FaStar icon from react-icons/fa
import './styles.css'; // Import external CSS file for styling

export default function StarRating({ noOfStars = 5 }) { // Define functional component StarRating, accepting props with a default value of 5 for noOfStars
  const [rating, setRating] = useState(0); // Initialize state variable rating with initial value of 0 using useState hook
  const [hover, setHover] = useState(0); // Initialize state variable hover with initial value of 0 using useState hook

  // Function to handle click event on a star
  function handleClick(index) {
    setRating(index);
    console.log("handleClick",rating); // Update rating state with the index of the clicked star
  }

  // Function to handle mouse enter event on a star
  function handleMouseEnter(index) {
    setHover(index); // Update hover state with the index of the hovered star
    console.log("handleMouseEnter",rating);
  }

  // Function to handle mouse leave event
  function handleMouseLeave() {
    setHover(rating); // Reset hover state to rating when mouse leaves the star rating component
    console.log("handleMouseLeave",rating);
  }

  return (
    <div className="star-rating"> {/* Render a div with class name "star-rating" */}
      {[...Array(noOfStars)].map((_, index) => { // Map over an array of length noOfStars
        index += 1; // Increment index by 1 (as index starts from 0)

        return (
          <FaStar // Render FaStar component from react-icons/fa
            key={index} // Set unique key for each star
            className={index <= (hover || rating) ? "active" : "inactive"} // Apply active or inactive class based on hover or rating state
            onClick={() => handleClick(index)} // Handle click event on star
            onMouseMove={() => handleMouseEnter(index)} // Handle mouse enter event on star
            onMouseLeave={() => handleMouseLeave()} // Handle mouse leave event on star rating component
            size={40} // Set size of the star
          />
        );
      })}
    </div>
  );
}
