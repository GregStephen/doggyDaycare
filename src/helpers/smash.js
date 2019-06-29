const walkEmployee = (walks, employees) => walks.map((walk) => {
  const w = walk;
  const employee = employees.find(e => e.id === w.employeeId);
  if (employee) {
    w.employeeName = employee.name;
    w.employeeImage = employee.imageUrl;
  }
  return w;
});

const walkDoggo = (walks, doggos) => walks.map((walk) => {
  const w = walk;
  const doggo = doggos.find(d => d.id === w.dogId);
  if (doggo) {
    w.doggoName = doggo.name;
    w.doggoImage = doggo.imageUrl;
  }
  return w;
});
export default { walkEmployee, walkDoggo };
