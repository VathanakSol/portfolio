"use client";

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const ContactAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current, // the dom element
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/contact.json' // the path to the animation json
      });

      return () => anim.destroy(); // optional clean up for unmounting
    }
  }, []);

  return <div ref={animationContainer} style={{ width: '500px', height: '500px' }}></div>;
};

export default ContactAnimation;