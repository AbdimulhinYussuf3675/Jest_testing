const functions = require("./functions");
// toBe
test("Adds 2 +2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
// not
test("Adds 2 +2 to NOT equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
  expect(functions.checkValue(2)).not.toBeFalsy();
});

// toEqual
test("user should be Abdi clizzy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Abdi",
    lastName: "clizzy",
  });
});

// less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// regex

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays

test("admin should be in usernames", () => {
  usernames = ["joahn", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham");
  });