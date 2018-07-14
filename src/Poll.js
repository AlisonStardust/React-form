import React from 'react';

const Poll = (props) => {
  return (
    <div class="wrapper">
      <form class="form" onSubmit={event => { event.preventDefault(); }}>
        <header class="form-header">
          <h1>{props.poll.question}
          </h1>
        </header>
       <div>
        {Object.entries(props.poll.votes).map(([id, vote]) => {

          return (
             <React.Fragment>
                <p class="form-answer">
                  {vote.answer}: {vote.counter}
                </p>
                <button class="form-answer-button" onClick={() => props.increment(props.poll.id, vote.id)}>👍</button>
             </React.Fragment>
          )
        })}
       </div>
      </form>
      <button class="button">
        Add
      </button>
    </div>
  )
}

export default Poll;