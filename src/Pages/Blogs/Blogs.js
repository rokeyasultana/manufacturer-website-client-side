import React from 'react';

const Blogs = () => {
    return (
         <div className='mt-5 mb-5 items-center  justify-items-center grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ml-4   space-y-2'>

<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How will you improve the performance of a React Application?
  </div>
  <div class="collapse-content"> 
  <p>There are different ways to improve performance of a React Application.
      Here are ways: </p><br></br>

    <p>* Most performance-associated problems in cell apps have a tendency to be taken care of out implementing little bit changes and smaller modifications, however those modifications are sufficient successful to make your app more faster the end result.<br></br>

* you want to ensure that components   get hold of best important props. It will permit you to manage the CPU intake and keep away from unnecessary over-rendering  features. The answer is to create a useful factor with the intention to acquire all props and redistribute them to different additives.</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
  </div>
  <div class="collapse-content"> 
  <p>There are different ways to manage a state a React Application.
      Here are ways: </p><br></br>

    <p>Managing state is arguably the toughest a part of any application

There are 4 major kinds of state you  will need to manage to your React apps:

Local state Global state
Serverstate
URL state
Local (UI) state – Local state is information we manage in a single or any other component.

Global (UI) state – Global state is information we manipulate throughout a couple of components.

Server state – Data that comes from an outside server that have to be incorporated with our UI country.

Server state is an easy concept, however may be tough to manipulate along all of our neighborhood and worldwide UI country.

URL state– Data that exists on our URLs, consisting of the pathname and question parameters.</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div class="collapse-content"> 
  <p>JavaScript prototype inheritance is mechanism that allows us to create new classes on the basis of already existing classes.<br></br>
      *To reuse the methods is used in class expressions.<br></br>
      *To reuse the methods and variables.<br></br>
      *Extends keyword is used in class expressions.<br></br>
      *To acquire all the properties and behavior.<br></br>
      *Prototype based approach to achieve inheritance.<br></br></p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  Why you do not set the state directly in React? 
  </div>
  <div class="collapse-content"> 
  <p>*If set state directly, you can't access all components.
    If you update the state directly. It can't change the state immediately.</p>
  </div>
</div>
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  What is a unit test? Why should write unit tests?
  </div>
  <div class="collapse-content"> 
  <p>Unit test is micro level of testing.It involves testing individual modules or pieces of code to make sure that each part or unit is correctly piece of functionality.It can be a programmer of particular, Procedure within th application it can be anything you want. Unit testing verify internal design and internal logic and internal parts ase well as error handling.</p>
  </div>
</div>


       
      </div>
    );
};

export default Blogs;