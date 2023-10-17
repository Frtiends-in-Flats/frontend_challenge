import { useState, useEffect } from 'react';

export type Question = {
    question: string;
    answers: string[];
};
// fetching data from the JSON
export const surveyDataQuestions = () => {
    const [surveyData, setSurveyData] = useState<Question[]>([]);
    // this loading state manage the data from the json
    // if the data is not ready, the loader is shown to the user in the 'SurveyCard component'
    const [loading, setLoading] = useState(true);

    const fetchSurveyQuestions = async () => {
        try {
            const data = (await import('./questions.json')).default;
            setSurveyData(data);
            setLoading(false);
        } catch (error: any) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSurveyQuestions();
    }, []);

    return {surveyData, loading};
};
