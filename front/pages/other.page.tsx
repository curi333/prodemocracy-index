// export function Page() {
// 	return (
// 		<section>
// 			<h1>It's coming soon...</h1>
// 			<p>It's gone :(</p>
// 		</section>
// 	);
// }


// import './style.css';

export function Page() {

	const questions = [
		{
			title: "question title",
			options: [
				{
					description: 'Option A',
					value: 'a'
				},
				{
					description: 'Option B',
					value: 'b'
				},
				{
					description: 'Option C',
					value: 'c'
				},
				{ description: 'Option D', value: 'd'}
			]
		},
		{
			title: 'second question',
			options: [
				{
					description: 'Option A',
					value: 'a'
				},
				{
					description: 'Option B',
					value: 'b'
				},
				{
					description: 'Option C',
					value: 'c'
				},
				{ description: 'Option D', value: 'd'}
			]
		}
	];

	return (
		<div>
			<section>
				{questions.map(question => (
					<Question 
						question={question}
					/>
				))}
			</section>
		</div>
	);
}




function Question(props) {
	return (
		<div>
			<h2>{props.question.title}</h2>


			<div className="question-options">
				{props.question.options.map(option => {
					return (
						<div className="question-option">
							<p>{option.description}</p>
							<input type="checkbox" />
						</div>					
					)
				})}
			</div>
		</div>

	)
}

// function QuestionOption(props) {
// 	return (
// 		props.options.map(option => {
// 			return (
// 				<div className="question-option">
// 					<p>{option.description}</p>
// 					<input type="checkbox" />
// 				</div>
// 			)
// 		})

// 	)
// }