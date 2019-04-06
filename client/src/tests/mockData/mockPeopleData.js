export const mockPeopleData = {
	people: [
		{
			id: 1,
			name: 'Adam Wright',
			title: 'Software Developer',
			phone: '919-555-5555',
			email: 'adam.wright@mycompany.com',
			profile: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
			about:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			education: [
				{
					institution: 'NC State University',
					startYear: 2001,
					endYear: 2004,
					degree: "Bachelor's, Computer Science"
				},
				{
					institution: 'NC State University',
					startYear: 2004,
					endYear: 2005,
					degree: "Master's, Computer Science"
				}
			],
			workExperience: [
				{
					institution: 'Megacorp',
					startYear: 2001,
					title: 'Software Developer'
				},
				{
					institution: 'Umbrella Corp',
					startYear: 1980,
					endYear: 2001,
					title: 'Software Developer'
				}
			],
			publications: [
				{
					name: 'Github Commits with Login',
					publisher: 'Arun Manohar Manoharan',
					website: 'https://nodejs-github-api.herokuapp.com',
					summary:
						"This is a simple login application where the user can register and login to this particular application to see the last 25 commits in nodejs Github repository. The commit # ending in a number are colored 'light-blue'."
				},
				{
					name: 'Picture Puzzle',
					publisher: 'Arun Manohar Manoharan',
					website: 'https://picture-puzzle.herokuapp.com/',
					summary: 'This is a picture puzzle game. The goal is to solve the puzzle before the time expires.'
				}
			]
		},
		{
			id: 2,
			name: 'Joe Manfrey',
			title: 'Software Developer',
			phone: '919-666-6666',
			email: 'joe.manfrey@mycompany.com',
			profile:
				"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'",
			about:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			education: [
				{
					institution: 'Clemson University',
					startYear: 1990,
					endYear: 1995,
					degree: "Bachelor's, Computer Science"
				}
			],
			workExperience: [
				{
					institution: 'Food Inc.',
					startYear: 1998,
					title: 'Software Developer'
				}
			],
			publications: [
				{
					name: 'Barely Good Enough Encryption',
					publisher: 'Arun Manohar Manoharan',
					website: 'https://barely-good-enough-encryption.herokuapp.com/#/',
					summary:
						'This is a Single Page Application developed using AngularJS. The application shows Barely Good Enough Encryption which is a combination of two algorithms. The first algorithm prints the 1st character of each word while the second algorithm takes the length of the first word and prints the corresponding character from the second word onwards. If the length of the word is less than the length of the first word, a space is printed. '
				},
				{
					name: 'Ten Substring Friendly',
					publisher: 'Arun Manohar Manoharan',
					website: 'https://ten-substring-friendly.herokuapp.com/',
					summary:
						'This is a simple application which lists out numbers forming a total of 10 with their digits within a specified value inputted to the user.'
				}
			]
		},
		{
			id: 3,
			name: 'Douglas Cho',
			title: 'Software Developer',
			phone: '919-777-7777',
			email: 'douglas.cho@mycompany.com',
			about:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus nunc diam, quis vulputate lacus pulvinar sed. Vivamus maximus mauris quis ante cursus, ut euismod massa tempor. Quisque et purus augue. Suspendisse tortor metus, suscipit et tempor a, sodales at diam. Nunc viverra, purus vitae commodo facilisis, leo lacus commodo.',
			education: [
				{
					institution: 'University of NC, Chapel Hill',
					startYear: 1990,
					endYear: 1995,
					degree: 'Marketing'
				}
			],
			workExperience: [
				{
					institution: 'Food Inc.',
					startYear: 1998,
					title: 'Software Developer'
				}
			],
			publications: [
				{
					name: 'String Match Frequency - D3.js',
					publisher: 'Arun Manohar Manoharan',
					website: 'http://string-match-frequency-d3.herokuapp.com/index.html',
					summary:
						'This application takes into account the values entered in two input fields and gets the matching characters between them and shows the frequency in the form of a chart using D3.js'
				},
				{
					name: 'Reduction and Comparison of PAPR values using different transforms in OFDM systems',
					publisher: 'Arun Manohar Manoharan',
					summary:
						'Minimized the PAPR for efficient transmission of signals with minimum consumption of power using orthogonal wavelets. Used Discrete Cosine Transform (DCT) and other orthogonal wavelets such as Haar, Coiflet, Daubechies, Symlet and Hadamard in this system along with ‘Companding’ theorem.'
				}
			]
		},
		{
			id: 4,
			name: 'Allison Murray',
			title: 'Software Developer',
			phone: '919-888-8888',
			email: 'allison.murray@mycompany.com',
			about:
				"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
			education: [
				{
					institution: 'University of Southern California',
					startYear: 2001,
					endYear: 2005,
					degree: 'Sociology'
				}
			],
			workExperience: [
				{
					institution: 'United Products',
					startYear: 1998,
					title: 'Directory of IT'
				}
			]
		}
	]
};

export const mockPersonData = {
	person: {
		id: 1,
		name: 'Adam Wright',
		title: 'Software Developer',
		phone: '919-555-5555',
		email: 'adam.wright@mycompany.com',
		profile: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
		about:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		education: [
			{
				institution: 'NC State University',
				startYear: 2001,
				endYear: 2004,
				degree: "Bachelor's, Computer Science"
			},
			{
				institution: 'NC State University',
				startYear: 2004,
				endYear: 2005,
				degree: "Master's, Computer Science"
			}
		],
		workExperience: [
			{
				institution: 'Megacorp',
				startYear: 2001,
				title: 'Software Developer'
			},
			{
				institution: 'Umbrella Corp',
				startYear: 1980,
				endYear: 2001,
				title: 'Software Developer'
			}
		],
		publications: [
			{
				name: 'Github Commits with Login',
				publisher: 'Arun Manohar Manoharan',
				website: 'https://nodejs-github-api.herokuapp.com',
				summary:
					"This is a simple login application where the user can register and login to this particular application to see the last 25 commits in nodejs Github repository. The commit # ending in a number are colored 'light-blue'."
			},
			{
				name: 'Picture Puzzle',
				publisher: 'Arun Manohar Manoharan',
				website: 'https://picture-puzzle.herokuapp.com/',
				summary: 'This is a picture puzzle game. The goal is to solve the puzzle before the time expires.'
			}
		]
	}
};
