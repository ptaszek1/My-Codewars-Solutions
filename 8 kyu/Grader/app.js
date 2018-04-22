function grader(score) {
    if(score <0.6 || score > 1) {
        return 'F';
    } else if (score >= 0.9 && score <= 1) {
        return 'A';
    } else if (score >= 0.8 && score <= 0.9) {
        return 'B';
    } else if (score >= 0.7 && score <= 0.8) {
        return 'C';
    } else if (score >= 0.6 && score <= 0.7) {
        return 'D';
    }
}