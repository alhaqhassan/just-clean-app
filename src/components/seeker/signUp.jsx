import React from 'react';
import SignUpCard from 'components/signUpCard';
import SeekerSignUpForm from 'forms/signUp/seeker.signUp.form';


const SeekerSignUpCard = ({initialValues}) => (
  <SignUpCard initialValues={initialValues} component={SeekerSignUpForm} subTitle='to find a job' type='SEEKER' />
);

export default SeekerSignUpCard;
