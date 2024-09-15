<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me Website - README</title>
    <style>
        .contact-field {
            margin: 10px 0;
        }
        .contact-field pre {
            background-color: #f1f1f1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
            user-select: none; /* Prevent text selection */
            font-family: monospace; /* Make it look like code */
        }
        .contact-field pre:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <h1>About Me Website</h1>
    <p>Welcome to my personal website! You can view the site by clicking the link below:</p>
    <p><a href="https://vladyslavpilkevych.github.io/personal-website/" target="_blank">Visit my website</a></p>
    <h2>Description</h2>
    <p>This website is a simple "About Me" page built using plain HTML, CSS, and JavaScript. The design is straightforward and easy to navigate, aiming to provide a clear and personal introduction.</p>
    <h2>How It Was Made</h2>
    <p>The entire site was created with simplicity in mind. Here is a brief overview of the technologies used:</p>
    <ul>
        <li><strong>HTML:</strong> For structuring the content.</li>
        <li><strong>CSS:</strong> For styling and layout.</li>
        <li><strong>JavaScript:</strong> For any interactive elements.</li>
    </ul>
    <h2>Contact</h2>
    <div class="contact-field">
        <label for="phone">Phone Number:</label>
        <pre id="phone" onclick="copyToClipboard('phone')">+451951945048</pre>
    </div>
    <div class="contact-field">
        <label for="email">Email:</label>
        <pre id="email" onclick="copyToClipboard('email')">vladyslavpilkevych2004@gmail.com</pre>
    </div>
    <h2>Connect with Me</h2>
    <p>
        <a href="https://www.instagram.com/vladyslavpilkevych/" target="_blank">Instagram</a><br>
        <a href="https://www.linkedin.com/in/vladyslav-pilkevych-4409b5236/" target="_blank">LinkedIn</a>
    </p>
    <script>
        function copyToClipboard(elementId) {
            const textElement = document.getElementById(elementId);
            const range = document.createRange();
            range.selectNode(textElement);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('Copied to clipboard: ' + textElement.textContent);
        }
    </script>
</body>
</html>
