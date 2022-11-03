/*
  WRITE YOUR SOLUTION HERE
*/


function getStudents(classroom) {
  let {hasTeachingAssistant, classList} = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssitant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Tony", "cyril", "Burt", "claire", "tom", "lisa"],
  })
);

