const predefinedHash = "1e8097e9db7ee048ff0ee75322d916bc67d0533f88da7ec655b422baf4ad32db"; 

        async function sha256(message) {
            const encoder = new TextEncoder();
            const data = encoder.encode(message);
            const hashBuffer = await crypto.subtle.digest("SHA-256", data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
        }

        document.getElementById("access-code").addEventListener("input", () => {
            document.getElementById("access-code").classList.remove("error");
            document.getElementById("error-message").classList.add("hidden");
        });

        async function checkAccess() {
            const accessCodeInput = document.getElementById("access-code");
            const inputCode = accessCodeInput.value;
        
           
            accessCodeInput.classList.remove("error");
        
            if (!inputCode) {
                accessCodeInput.classList.add("error", "shake");
                document.getElementById("error-message").classList.remove("hidden");
                setTimeout(() => {
                    accessCodeInput.classList.remove("shake");
                }, 500);
                return;
            }
        
            const hashedInput = await sha256(inputCode);
        
            if (hashedInput === predefinedHash) {
                document.getElementById("access-container").classList.add("hidden");
                document.getElementById("quiz-container").classList.remove("hidden");
                loadQuestion();
            } else {
                accessCodeInput.value = "";
                accessCodeInput.classList.add("error", "shake");
                document.getElementById("error-message").classList.remove("hidden");
        
                
                setTimeout(() => {
                    accessCodeInput.classList.remove("shake");
                }, 500);
            }
        }

        const questions = [
            // HTML Basics
            { 
                question: "What does HTML stand for?", 
                choices: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High Tech Machine Learning", "Hyperlink and Text Management Language"], 
                answer: "Hyper Text Markup Language" 
            },
            { 
                question: "Which tag is used to create a hyperlink in HTML?", 
                choices: ["<link>", "<a>", "<href>", "<url>"], 
                answer: "<a>" 
            },
            { 
                question: "Which HTML element represents the largest heading?", 
                choices: ["<h6>", "<h3>", "<h1>", "<header>"], 
                answer: "<h1>" 
            },
            { 
                question: "What is the correct way to comment in HTML?", 
                choices: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "' This is a comment"], 
                answer: "<!-- This is a comment -->" 
            },
            { 
                question: "Which tag is used to define a table row?", 
                choices: ["<td>", "<th>", "<tr>", "<table>"], 
                answer: "<tr>" 
            },
            { 
                question: "Which tag is used to insert an image in HTML?", 
                choices: ["<image>", "<img>", "<src>", "<pic>"], 
                answer: "<img>" 
            },
            {
                question: "Which tag is used for creating dropdown lists where users can select one or more options from a predefined set",
                choices: ["<select>", "<dropdown>", "<datalist>", "<options>"],
                answer: "<select>"
            },
            {
                question: "What attribute is used to specify that an input field must be filled out?",
                choices: ["required", "validate", "fill", "complete"],
                answer: "required"
            },
            {
                question: "Which tag is used to define a hyperlink, which is used to link from one page to another?",
                choices: ["<a>", "<link>", "<href>", "<url>"],
                answer: "<a>"
            },
            {
                question: "What is the correct HTML for making a text input field?",
                choices: ["<input type='text'>", "<textinput>", "<textfield>", "<input type='textfield'>"],
                answer: "<input type='text'>"
            },
        
            // CSS Basics
            { 
                question: "Which CSS property controls text size?", 
                choices: ["font-style", "text-size", "font-size", "size"], 
                answer: "font-size" 
            },
            { 
                question: "Which CSS property is used to change the background color?", 
                choices: ["bgcolor", "background-color", "color", "background"], 
                answer: "background-color" 
            },
            { 
                question: "Which CSS property makes text bold?", 
                choices: ["font-bold", "text-style", "bold", "font-weight"], 
                answer: "font-weight" 
            },
            { 
                question: "What is the default position of an HTML element in CSS?", 
                choices: ["absolute", "relative", "static", "fixed"], 
                answer: "static" 
            },
            { 
                question: "Which CSS unit is relative to the parent element's font size?", 
                choices: ["px", "em", "rem", "%"], 
                answer: "em" 
            },
            {
                question: "Which of the following is NOT a valid CSS unit?",
                choices: ["px", "em", "pt", "ppx"],
                answer: "ppx"
            },
            {
                question: "How to set a background image?",
                choices: ["background: url('img.jpg');", "bg-image: img.jpg;", "background-image: img.jpg;", "image-background: url(img.jpg);"],
                answer: "background: url('img.jpg');"
            },
            {
                question: "What property sets an element's transparency?",
                choices: ["visibility", "opacity", "alpha", "transparent"],
                answer: "opacity"
            },
            {
                question: "Which if the following is NOT a valid CSS property?",
                choices: ["font-size", "font-weight", "font-color", "font-family"],
                answer: "font-color"
            },
            {
                question: "Which property controls the space around an element inside its border?",
                choices: ["padding", "margin", "spacing", "border-gap"],
                answer: "padding"
            },


        
            // JavaScript Basics
            { 
                question: "Which symbol is used for single-line comments in JavaScript?", 
                choices: ["//", "/* */", "<!-- -->", "#"], 
                answer: "//" 
            },
            { 
                question: "Which function is used to output text to the console in JavaScript?", 
                choices: ["console.print()", "print()", "console.log()", "log()"], 
                answer: "console.log()" 
            },
            { 
                question: "Which keyword is used to declare a constant variable?", 
                choices: ["var", "let", "const", "define"], 
                answer: "const" 
            },
            { 
                question: "What does 'NaN' stand for in JavaScript?", 
                choices: ["Not a Number", "Null and None", "New Assigned Number", "Next Available Number"], 
                answer: "Not a Number" 
            },
            { 
                question: "Which method is used to convert a string into an integer?", 
                choices: ["parseInt()", "toInt()", "convertInt()", "stringToNumber()"], 
                answer: "parseInt()" 
            },
            {
                question: "Which of the following is NOT a variable declaration keyword in JavaScript?",
                choices: ["var", "let", "const", "int"],
                answer: "int"
            },
            {
                question: "Which of the following is NOT a valid JavaScript data type?",
                choices: ["string", "number", "boolean", "float"],
                answer: "float"
            },
            {
                question: "What is a hoisted function in JavaScript?",
                choices: ["A function that is defined after it is called", "A function that is called before it is defined", "A function that is defined in the global scope", "A function that is defined in the local scope"],
                answer: "A function that is called before it is defined"
            },
            {
                question: "How do you declare a function in JavaScript?",
            choices: ["function myFunc()", "def myFunc()", "func myFunc()", "function: myFunc()"],
            answer: "function myFunc()"
            },
            {
                question: "How do you create an array in JavaScript?",
                choices: ["[]", "{}", "()", "<>"],
                answer: "[]"
            },
        
            // JavaScript Advanced
            { 
                question: "Which method is used to add a new element to an array?", 
                choices: ["push()", "add()", "insert()", "append()"], 
                answer: "push()" 
            },
            { 
                question: "Which function is used to delay execution of a function?", 
                choices: ["setTimeout()", "setInterval()", "clearTimeout()", "delay()"], 
                answer: "setTimeout()" 
            },
            { 
                question: "Which function is used to repeatedly execute code at a set interval?", 
                choices: ["setTimeout()", "setInterval()", "repeat()", "loop()"], 
                answer: "setInterval()" 
            },
        
            // Web Development History
            { 
                question: "Who invented the World Wide Web?", 
                choices: ["Brendan Eich", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"], 
                answer: "Tim Berners-Lee" 
            },
            { 
                question: "Who created JavaScript?", 
                choices: ["Brendan Eich", "Tim Berners-Lee", "Linus Torvalds", "Guido van Rossum"], 
                answer: "Brendan Eich" 
            },
            {
                question: "Who invented CSS?",
                choices: ["Angelo Cairel", "Tim Berners-Lee", "Håkon Wium Lie", "Guido van Rossum"],
                answer: "Håkon Wium Lie"
            },
            {
                question: "When was the CSS first proposed?",
                choices: ["1994", "1996", "1998", "2000"],
                answer: "1994"
            },
            {
                question: "When was the HTML first introduced?",
                choices: ["1990", "1993", "1994", "1996"],
                answer: "1993"
            },
            {
                question: "When was the JavaScript first introduced?",
                choices: ["1993", "1994", "1995", "1996"],
                answer: "1995"
            },
            {
                question: "What was the original name of JavaScript?",
                choices: ["Mocha", "LiveScript", "CoffeeScript", "Java"],
                answer: "Mocha"
            },
            {
                question: "How many days did it take to create JavaScript?",
                choices: ["10 days", "20 days", "30 days", "40 days"],
                answer: "10 days"
            },
            {
                question: "Which company created JavaScript?",
                choices: ["Netscape", "Microsoft", "Google", "Apple"],
                answer: "Netscape"
            },
            {
                question: "What was the original purpose of CSS?",
                choices: ["To separate content from presentation", "To add animations", "To create responsive designs", "To improve accessibility"],
                answer: "To separate content from presentation"
            },
        
            // APIs & HTTP
            { 
                question: "Which HTTP method is used to retrieve data?", 
                choices: ["GET", "POST", "DELETE", "PUT"], 
                answer: "GET" 
            },
            { 
                question: "Which HTTP status code means 'Not Found'?", 
                choices: ["200", "301", "404", "500"], 
                answer: "404" 
            },
            { 
                question: "Which of the following is NOT a valid HTTP method?", 
                choices: ["GET", "POST", "FETCH", "PUT"], 
                answer: "FETCH" 
            },
        
            // Security
            { 
                question: "What is the best way to store sensitive user passwords?", 
                choices: ["Plain text", "Base64 encoding", "Hashing", "Cookies"], 
                answer: "Hashing" 
            },
            { 
                question: "Which JavaScript function can be used to prevent Cross-Site Scripting (XSS)?", 
                choices: ["JSON.parse()", "escape()", "sanitize()", "encodeURI()"], 
                answer: "sanitize()" 
            },
        
            // More Advanced Topics
            { 
                question: "Which JavaScript method is used to convert an object into a JSON string?", 
                choices: ["JSON.parse()", "JSON.stringify()", "JSON.encode()", "toJSON()"], 
                answer: "JSON.stringify()" 
            },
            { 
                question: "What is the purpose of localStorage in JavaScript?", 
                choices: ["Store data temporarily", "Store data permanently in the browser", "Store session data", "Store cookies"], 
                answer: "Store data permanently in the browser" 
            },
            { 
                question: "Which of the following is NOT a JavaScript framework?", 
                choices: ["React", "Vue", "Angular", "Django"], 
                answer: "Django" 
            },
            { 
                question: "Which JavaScript function is used to fetch data from an API?", 
                choices: ["getRequest()", "fetch()", "requestAPI()", "sendRequest()"], 
                answer: "fetch()" 
            }
        ];

        function shuffleQuestions(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        shuffleQuestions(questions);
        
        

        let currentQuestionIndex = 0;
        let score = 0;
        let answersLog = [];

        function loadQuestion() {
            if (currentQuestionIndex >= questions.length) {
                showResults();
                return;
            }
            
            const questionElement = document.getElementById("question");
            const choicesContainer = document.getElementById("choices");
            const questionNumber = document.getElementById("question-number");
            const currentQuestion = questions[currentQuestionIndex];
            
            questionElement.textContent = currentQuestion.question;
            questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
            choicesContainer.innerHTML = "";

            currentQuestion.choices.forEach(choice => {
                const button = document.createElement("button");
                button.textContent = choice;
                button.onclick = () => checkAnswer(button, choice, currentQuestion.answer);
                choicesContainer.appendChild(button);
            });
        }

        function checkAnswer(button, selected, correct) {
            document.querySelectorAll(".choices button").forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === correct) btn.classList.add("correct");
                if (btn.textContent === selected && selected !== correct) btn.classList.add("wrong");
            });
            
            answersLog.push({ question: questions[currentQuestionIndex].question, selected, correct });
            
            if (selected === correct) {
                score++;
                document.getElementById("score").textContent = score;
            }
            
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1000);
        }

        function showResults() {
            document.getElementById("question").classList.add("hidden");
            document.getElementById("choices").classList.add("hidden");
            document.getElementById("question-number").classList.add("hidden");
            document.getElementById("result").classList.remove("hidden");
            document.getElementById("final-score").textContent = score;
            document.getElementById("total-questions").textContent = questions.length;
        }