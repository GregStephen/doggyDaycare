const walkEmployee = (walks, employees) => walks.map((walk) => {
  const w = walk;
  const employee = employees.find(e => e.id === w.employeeId);
  if (employee) {
    w.employeeName = employee.name;
  }
  return w;
});

const walkDoggo = (walks, doggos) => walks.map((walk) => {
  const w = walk;
  const doggo = doggos.find(d => d.id === w.dogId);
  if (doggo) {
    w.doggoName = doggo.name;
  }
  return w;
});
export default { walkEmployee, walkDoggo };
