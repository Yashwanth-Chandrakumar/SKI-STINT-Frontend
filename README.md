# SKI-STINT-Frontend
A Task management platform for institutions

# Live Deployment:
https://skistint.netlify.app/

# Contributor Guidance

1) Fork the repository and clone it into your local pc.<br>
2) As you perform changes do it on a whole for example a complete component and push it to your main.
3) Create a pull request so it can be verified that there are no code conflicts.
4) If there are no conflicts then the PR will be merged.
5) If there are any bugs or issue please mention it in the issue section.
   
# Framework Used: 
React - Vite

# Installation

1) After cloning the repo, open the terminal and type:
   ```
   cd stint
   ```
2) Then:
   ```
   npm i
   ```
3) To run the local web deployment:
   ```
   npm run dev
   ```
# File Organisation:

1) Main or root css must be present in App.css file.
2) CSS for each component must be present in src/components/css
3) JSX components can be present in src/components
4) Images must be present in src/assets/img
5) Icons can be present in src/assets
Note: These do not affect the website's behaviour but for ease of use.

# Using of root css:

Ex: App.css:
```
:root{
--text-color:#000000;
}
```

To use that color:
```
.someclass{
font-color:var(--text-color);
}
```
