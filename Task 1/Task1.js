// Define a function that generates the course HTML based on the provided data
function generateCourseHTML(time, topic, title, description) {
    return `
      <div class="courses">
        <div class="courses_info">
          <div class="time">${time}</div>
          <div class="related_topic">${topic}</div>
        </div>
        <div class="courses_title">${title}</div>
        <div class="courses_description">${description}</div>
        <div class="courses_button">
          <button>Continue reading >></button>
        </div>
      </div>
    `;
}

// This function generates the Button which can be used multiple times
function generateButton(val) {
    if(val==='<<'||val==='>>')
    {
        return `
        <button>${val}</button>
        `;
    }
    return `
    <button id="button-${val}" onClick="handleClick(${val})">${val+1}</button>
    `;
}

//Get container where we want to display buttons
const btn_container = document.getElementById('pages-button');

// Get the container where courses will be added
const coursesContainer = document.getElementById('courses-container');


// according to the array length of data we are display components
function buttonAppear() {
    const no = Math.floor(coursesData.length / 10);
    btn_container.innerHTML += generateButton('<<')
    for (let i = 0; i < no+1; i++) {
        btn_container.innerHTML += generateButton(i);
    }
    btn_container.innerHTML += generateButton('>>');
}


//this is function is used to courses in the form card at one time only 10 data will appear after clicking on next page another 10 courses will appear
function handleClick(val) {
    
    coursesContainer.innerHTML = '';
    for (let i = (val)* 10; i < ((val*10)+ 10)&& i < coursesData.length; i++) {
        const course = coursesData[i];
        const courseHTML = generateCourseHTML(course.time, course.topic, course.title, course.description);
        coursesContainer.innerHTML += courseHTML;
    }

    const buttons = document.querySelectorAll('button[id^="button-"]');
    buttons.forEach(button => {
      button.style.backgroundColor = "";
    });

    const buttonCol = document.getElementById(`button-${val}`);
    if (buttonCol) {
        buttonCol.style.backgroundColor = "red";
    }
}

//This window onload is used to display first 10 courses on page loading
window.onload = function () {
    handleClick(0);
    buttonAppear();
}

// Here is all data we are passing in function
// Here is all dummy data
const coursesData = [
    {
        time: 'January 11, 2022',
        topic: 'Interviews',
        title: 'MUST-DO Questions for [DBMS, CN, OS] Interviews: SDE Core Sheet',
        description: '(Sheet for the sole purpose of quick revision and preparation in less time) Made with love by takeUforward! What is a tree data structure? There '
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'April 15, 2023',
        topic: 'Web Development',
        title: 'Learn React in 7 Days',
        description: 'This course is designed to teach you the fundamentals of React in just 7 days. By the end of the course, you will be able to build your own React applications from scratch!'
    },
    {
        time: 'May 1, 2023',
        topic: 'Mobile Development',
        title: 'iOS App Development Bootcamp',
        description: 'Learn how to build iOS apps from scratch in this intensive bootcamp! Our expert instructors will guide you through the process of building your first app, and you will leave with the skills to build your own iOS apps.'
    },
    {
        time: 'June 15, 2023',
        topic: 'Data Science',
        title: 'Introduction to Data Science',
        description: 'In this course, you will learn the basics of data science, including data analysis, visualization, and machine learning. By the end of the course, you will be able to apply these skills to real-world data sets.'
    },
    {
        time: 'July 1, 2023',
        topic: 'Machine Learning',
        title: 'Deep Learning with TensorFlow',
        description: 'In this course, you will learn how to build deep neural networks using TensorFlow. We will cover topics such as convolutional neural networks, recurrent neural networks, and natural language processing.'
    },
    {
        time: 'August 15, 2023',
        topic: 'Web Development',
        title: 'Full-Stack Web Development Bootcamp',
        description: 'In this intensive bootcamp, you will learn how to build full-stack web applications using the latest technologies. We will cover topics such as React, Node.js, and MongoDB.'
    },
    {
        time: 'September 1, 2023',
        topic: 'Mobile Development',
        title: 'Android App Development Bootcamp',
        description: 'Learn how to build Android apps from scratch in this intensive bootcamp! Our expert instructors will guide you through the process of building your first app, and you will leave with the skills to build your own Android apps.'
    },
    {
        time: 'October 15, 2023',
        topic: 'Data Science',
        title: 'Machine Learning with Python',
        description: 'In this course, you will learn how to use Python to build machine learning models. We will cover topics such as linear regression, logistic regression, and decision trees.'
    },
    {
        time: 'November 1, 2023',
        topic: 'Machine Learning',
        title: 'Natural Language Processing with Python',
        description: 'In this course, you will learn how to use Python to build natural language processing models. We will cover topics such as sentiment analysis, text classification, and named entity recognition.'
    },
    {
        time: 'December 15, 2023',
        topic: 'Web Development',
        title: 'Building APIs with Node.js',
        description: 'In this course, you will learn how to build APIs using Node.js and Express. We will cover topics such as RESTful APIs, authentication, and error handling.'
    },
    {
        time: 'January 1, 2024',
        topic: 'Mobile Development',
        title: 'Advanced iOS App Development',
        description: 'In this course, you will learn advanced topics in iOS app development, including Core Data, Core Animation, and networking. By the end of the course, you will be able to build complex iOS apps.'
    },

    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'April 20, 2022',
        topic: 'Web Development',
        title: 'Building Responsive Websites with Bootstrap 5',
        description: 'Learn how to build modern, responsive websites using the latest version of the popular front-end framework Bootstrap 5.'
    },
    {
        time: 'June 15, 2022',
        topic: 'Data Science',
        title: 'Machine Learning with Python: From Beginner to Expert',
        description: 'Master the fundamentals of machine learning using Python, and learn how to build and evaluate predictive models.'
    },
    {
        time: 'August 10, 2022',
        topic: 'Mobile Development',
        title: 'Building Native iOS Apps with Swift',
        description: 'Learn how to build native iOS apps using the Swift programming language and Xcode.'
    },
    {
        time: 'October 5, 2022',
        topic: 'Cloud Computing',
        title: 'Introduction to AWS Services',
        description: 'Get an overview of the various services provided by Amazon Web Services, and learn how to use them to build scalable and reliable cloud-based applications.'
    },
    {
        time: 'December 1, 2022',
        topic: 'Artificial Intelligence',
        title: 'Deep Learning with TensorFlow 2.0',
        description: 'Learn how to build and train deep neural networks using TensorFlow 2.0, and apply them to real-world problems like image classification and natural language processing.'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    }, {
        time: 'January 11, 2022',
        topic: 'Interviews',
        title: 'MUST-DO Questions for [DBMS, CN, OS] Interviews: SDE Core Sheet',
        description: '(Sheet for the sole purpose of quick revision and preparation in less time) Made with love by takeUforward! What is a tree data structure? There '
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'March 30, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUbackward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'March 28, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'March 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'March 28, 2002',
        topic: 'Interviews',
        title: 'MUST-DO Questions for [DBMS, CN, OS] Interviews: SDE Core Sheet',
        description: '(Sheet for the sole purpose of quick revision and preparation in less time) Made with love by takeUforward! What is a tree data structure? There '
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    },
    {
        time: 'October 12, 2021',
        topic: ' Interviews',
        title: 'Paid Work from Home Internship at takeUforward!',
        description: 'Paid Work from Home Internship at takeUforward!'
    }
];



