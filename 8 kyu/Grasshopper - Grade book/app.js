function getGrade(s1, s2, s3) {
    let get = (s1 + s2 + s3) / 3
    if (get >= 90) return 'A'
    if (get >= 80 && get < 90) return 'B'
    if (get >= 70 && get < 80) return 'C'
    if (get >= 60 && get < 70) return 'D'
    else return 'F'
}