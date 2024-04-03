// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';


export default function () {
   const questions = [{
               type: "radiogroup",
               name: "question1",
               title: "How many foodborne diseases are there?",
               choices: [
                   "10", "100", "156", "Over 250"
               ],
               correctAnswer: "Over 250"
           },
           {
               type: "radiogroup",
               name: "question2",
               title: "Is everyone is susceptible to foodborne illness?",
               choices: [
                   "Yes", "Most people are but not all", "Maybe", "No"
               ],
               correctAnswer: "Yes"
           },
           {
               type: "radiogroup",
               name: "question3",
               title: "What slows the growth of harmful bacteria?",
               choices: [
                   "Leaving food in the sun", "Puting food in a dawer", "Puting food in the freezer", "Covering food with a towel"
               ],
               correctAnswer: "Puting food in the freezer"
           },
           {
               type: "radiogroup",
               name: "question4",
               title: "What food is most likely to have germs?",
               choices: [
                   "Canned beans", "Unwashed produce", "Processed meat", "Freshly baked bread"
               ],
               correctAnswer: "Unwashed Produce"
           },
           {
               type: "radiogroup",
               name: "question5",
               title: "What temperature should you keep your refrigerator at?",
               choices: [
                   "30F", "50F", "40F", "32F"
               ],
               correctAnswer: "40F"
           },
             {
               type: "radiogroup",
               name: "question6",
               title: "Where should someone put frozen food that they want to thaw throughout the day?",
               choices: [
                   "In the refrigerator", "In the oven", "On the counter", "In the microwave"
               ],
               CorrectAnswer: "In the refrigerator"
           },
           {
               type: "radiogroup",
               name: "question7",
               title: "What kills bacteria?",
               choices: [
                   "Puting food into the refrigerator", "Leaving food in the shade", "Lots of heat", "Nothing"
               ],
               CorrectAnswer: "Lots of heat"
           },
           {
               type: "radiogroup",
               name: "question8",
               title: "What is a potential affect of eating contaminated food?",
               choices: [
                   "Long-term health problems", "Instant death", "Gaining a super power", "Turning blue"
               ],
               CorrectAnswer: "Long-term health problems"
           },
           {
               type: "radiogroup",
               name: "question9",
               title: "Do foodborne diseases negatively affect vulnerable people more than other social groups?",
               choices: [
                   "Yes", "Maybe", "It depends...", "No"
               ],
               CorrectAnswer: "Yes"
           },
           {
               type: "radiogroup",
               name: "question10",
               title: "Does globalization make food safety more complex and essential?",
               choices: [
                   "Yes", "Only in the Western Hemisphere", "Only in the Middle East", "No"
               ],
               CorrectAnswer: "Yes"
           }];
   const nQuestion = Math.floor((Math.random() * questions.length))
   const surveyJson = {
       title: "Food Safety Check-In Quiz",
       showCorrectAnswer: "always",
       showProgressBar: "bottom",
       firstPageIsStarted: true,
       startSurveyText: "Start Quiz",
       pages: [{
           elements: [{
               type: "html",
               html: "You are about to start a quiz on Food Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
           }, {
               type: "text",
               name: "username",
               titleLocation: "hidden",
               isRequired: true
           }]
       }, {
           elements: [questions[nQuestion]]
       }]
   };
   const survey = new Model(surveyJson);


   survey.onComplete.add(function (sender) {
       var questions = sender.getAllQuestions();
       for (var i = 0; i < questions.length; i++) {
           var question = questions[i];
           var correctAnswer = question.correctAnswer;
           var userAnswer = question.value;
           var questionTitle = question.title;
           console.log("Question: " + questionTitle);
           console.log("Correct Answer: " + correctAnswer);
           console.log("User Answer: " + userAnswer);
       }
   });


   return <Survey model={survey} />;
}
