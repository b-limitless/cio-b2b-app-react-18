import React from "react";

export const shirtMeasurementGuide:any = {
  sleeveLength: {
    label: 'Sleeve Length',
    placeholder: 'Enter sleeve length measurement',
    instructions:
      'To measure sleeve length, place one end of the measuring tape at the center of the back of your neck. Measure over the top of your shoulder, down to the point where you want the sleeve to end.',
  },
  shoulderWidth: {
    label: 'Shoulder Width',
    placeholder: 'Enter shoulder width measurement',
    instructions:
      'To measure shoulder width, measure from the tip of one shoulder to the tip of the other, across the back.',
  },
  chestAround: {
    label: 'Chest Around',
    placeholder: 'Enter chest around measurement',
    instructions:
      'To measure chest around, wrap the measuring tape under your armpits and around the fullest part of your chest.',
  },
  stomach: {
    label: 'Stomach',
    placeholder: 'Enter stomach measurement',
    instructions:
      'To measure stomach, wrap the measuring tape around the narrowest part of your waist, just above the belly button.',
  },
  bicepAround: {
    label: 'Bicep Around',
    placeholder: 'Enter bicep around measurement',
    instructions:
      'To measure bicep around, wrap the measuring tape around the fullest part of your bicep.',
  },
  torsoLength: {
    label: 'Torso Length',
    placeholder: 'Enter torso length measurement',
    instructions:
      'To measure torso length, start at the base of your neck and measure down the center of your back to the point where you want the shirt to end.',
  },
  hips: {
    label: 'Hips',
    placeholder: 'Enter hips measurement',
    instructions:
      'To measure hips, wrap the measuring tape around the fullest part of your hips and buttocks.',
  },
  wrist: {
    label: 'Wrist',
    placeholder: 'Enter wrist measurement',
    instructions:
      'To measure wrist, wrap the measuring tape around the circumference of your wrist, just above the bone.',
  },
  neck: {
    label: 'Neck',
    placeholder: 'Enter neck measurement',
    instructions:
      'To measure neck, wrap the measuring tape around the base of your neck, where your shirt collar would normally sit.',
  },
  videoLink: {
    label: 'Measurement Video',
    url: 'your-video-link',
    instructions: 'For a visual guide, watch our video on how to take shirt measurements.',
  },
};

const howToMeasureBodyParts:any = {
  neck: 'https://youtube.com'
}

// for(let [key, value] of Object.entries(shirtMeasurementGuide)) {
//   shirtMeasurementGuide[key].instruction = <span></span>;
// }

// Add video for each instruction

