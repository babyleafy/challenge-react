import {useState} from "react";
import Box from "@mui/material/Box";


const Question = ({question, index, setAnswers, validate, submitted}) => {
    const [selected, setSelected] = useState("");
    const handleSelect = (e) => {
        setSelected(e.target.value);
        setAnswers((answers) => {
            answers[index] = e.target.value;
            console.log(answers.length);
            return answers;
        });
        validate();
    };

    return (
        <div className="question" style={{marginBottom : 40}}>
            <h3 style={{fontSize: 18, fontWeight: '500'}}> {index + 1 + ". " + question.prompt}</h3>
            {Object.keys(question.options).map((option, i) => (
                <label className={option + index} key={i} style={{display: 'block'}}>
                    <Box component="label"
                         sx={{
                             display: 'block',
                             alignItems: "stretch",
                             p: 1,
                             m: 1,
                             bgcolor: selected === option ? '#456CB3' : 'white',
                             color: selected === option ? 'white' : 'black',
                             border: '1px solid',
                             borderColor: (theme) =>
                                 theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                             borderRadius: 2,
                             fontSize: '0.875rem',
                             fontWeight: '400',
                             '&:hover': !submitted && selected !== option ? {
                                 color: 'black',
                                 backgroundColor: '#bdd6f0',
                                 borderColor: '#5896a6',
                             } : {
                             },
                         }}
                    >
                        <input
                            key={i}
                            type="radio"
                            name={index}
                            id={option + index}
                            value={option}
                            onChange={handleSelect}
                            checked={selected === option}
                            disabled={submitted}
                        />
                        {option + ": " + question.options[option]}
                    </Box>
                </label>
            ))}

        </div>
    );
}

export default Question;
