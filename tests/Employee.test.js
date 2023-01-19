const Employee = require('../lib/Employee.js')

test('employee object', () => {
    // expect(sum(1, 2)).toBe(3);
    const employee = new Employee('Marcus Walker', "1111", 'marcus@gmail.com');

    expect(employee.name).toBe('Marcus Walker');
    expect(employee.id).toBe('1111');
    expect(employee.email).toBe('marcus@gmail.com');
  });

  test('gets employee name', () => {
    const employee = new Employee('Marcus Walker', "1111", 'marcus@gmail.com');

    expect(employee.getName()).toEqual('Marcus Walker');
  });

  test('gets employee id', () => {
    const employee = new Employee('Marcus Walker', "1111", 'marcus@gmail.com');

    expect(employee.getId()).toEqual('1111');
  });

  test('gets employee email', () => {
    const employee = new Employee('Marcus Walker', "1111", 'marcus@gmail.com');

    expect(employee.getEmail()).toEqual('marcus@gmail.com');
  });

  test('gets employee role', () => {
    const employee = new Employee('Marcus Walker', "1111", 'marcus@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
  });