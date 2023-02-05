import data from "../data.json";
import Box from "@mui/material/Box";

const Results = ({answers}) => {
    const getMode = (answers) => {
        let arr = answers.slice();
        const store = {}
        arr.forEach((num) => store[num] ? store[num] += 1 : store[num] = 1)
        let mode = Object.keys(store).sort((a, b) => store[b] - store[a])[0]
        let index = 0;
        for (let choice in data.questions[0].options) {
            if (choice === mode) return index;
            index++;
        }
        return index;
    }

    return (
        <Box component="span"
             sx={{
                 display: 'block',
                 p: 1,
                 m: 1,
                 bgcolor: '#bdd6f0',
             }}>
            <h3 style={{fontSize: 20}}>Congratulations!</h3>
            {data.results[getMode(answers)]}
        </Box>
    );
}

export default Results;
