
const Faq = () => {
 const faqData = {
   "Web Development": [
     {
       "question": "How can I join the 'Introduction to Web Development' session?",
       "answer": "Simply attend the session at the specified time. No prior registration is required."
     },
     {
       "question": "Is the '21 Days Challenge' suitable for beginners?",
       "answer": "Absolutely! The challenge is designed for both beginners and experienced coders to enhance their web development skills."
     },
     {
       "question": "Can I use platforms other than Replit or Codepen for the 21 Days Challenge?",
       "answer": "No, submissions from other platforms won't be accepted. Stick to Replit, Codepen, or local coding with Google Drive uploads."
     },
     {
       "question": "Is collaboration allowed during the 21 Days Challenge?",
       "answer": "Collaboration is encouraged, but sharing solutions publicly during the task period is strictly prohibited."
     },
     {
       "question": "What happens if I miss a day in the 21 Days Challenge?",
       "answer": "Try to complete each task daily, but if you miss a day, catch up on the following day. Late submissions, however, might not be accepted, and any points won’t be provided for late submission."
     },
     {
       "question": "Can I share my solutions on GitHub during the 21 Days Challenge?",
       "answer": "Yes, but only after the specified task period has ended. Respect the challenge rules."
     }
   ],
   "Android Development": [
     {
       "question": "Is there any specific language that we need to code our solution in mobile development?",
       "answer": "Yes, you must use Flutter as a UI platform and Dart as a programming language."
     },
     {
       "question": "Will there be a leaderboard during the challenge?",
       "answer": "Yes, there will be a leaderboard updating daily based on our point system."
     },
     {
       "question": "Is it mandatory to solve all the tasks of the day to stay challenged?",
       "answer": "Yes, if you miss any task of the day, you will not be considered as a participant of this challenge anymore, but still, you can solve the problems and gain points to stay on top in the leaderboard."
     },
     {
       "question": "What should I do if I am not able to solve the task of the day?",
       "answer": "Try to learn more about the concept and try to solve the task again. Hints will be provided near the end of the deadline. We will also be giving tutorials every day after the completion of the task of the day."
     },
     {
       "question": "Will there be prizes for winners?",
       "answer": "Yes, there will be exciting prizes and goodies for top performers based on the leaderboard."
     },
     {
       "question": "Is there any limit about how many times you can attempt the problem?",
       "answer": "No, there is no such limit. You can attempt the problem as many times as you want. And there is no penalty for wrong submission."
     }
   ],
   "Artificial Intelligence & Machine Learning": [
     {
       "question": "Is there any specific language and IDE that we need to code our solution in ML?",
       "answer": "Yes, you must use Python and Jupyter Notebook or Google Colab."
     },
     {
       "question": "Will there be a leaderboard during the challenge?",
       "answer": "Yes, there will be a leaderboard updating daily based on our point system."
     },
     {
       "question": "Is it mandatory to solve all the tasks of the day to stay challenged?",
       "answer": "Yes, if you miss any task of the day, you will not be considered as a participant of this challenge anymore, but still, you can solve the problems and gain points to stay on top in the leaderboard."
     },
     {
       "question": "What should I do if I am not able to solve the task of the day?",
       "answer": "Try to learn more about the concept and try to solve the task again. Hints will be provided near the end of the deadline. We will also be giving tutorials every day after the completion of the task of the day."
     },
     {
       "question": "Will there be prizes for winners?",
       "answer": "Yes, there will be exciting prizes and goodies for top performers based on the leaderboard."
     },
     {
       "question": "Is there any limit about how many times you can attempt the problem?",
       "answer": "No, there is no such limit. You can attempt the problem as many times as you want. And there is no penalty for wrong submission."
     }
   ]
 }


 const FaqItem = ({ question, answer }) => {
   return (
     <div className="question-box px-[3rem] py-5">
       <h2 className="text-white" style={{ cursor: 'pointer' }}>
         Q. {question}
       </h2>
       <p className="text-cyan-400">Ans: {answer}</p>
     </div>
   );
 };


 return (
   <>
     <div className="custom-bg-color bounded ">
       <h1 className="pt-[5rem] pl-[5rem] pb-[3.5rem] underline ">Frequently Asked Questions:</h1>
       <div className="submission-form rounded-lg p-8 -mt-14">
         {Object.keys(faqData).map((category) => (
           <div key={category}>
             <h2 className="text-green-400 px-[3rem] pt-14 pb-4 underline">{category}:</h2>
             {faqData[category].map((item, index) => (
               <FaqItem key={index} question={item.question} answer={item.answer} />
             ))}
           </div>
         ))}
       </div>
     </div>
   </>
 );
};


export default Faq;