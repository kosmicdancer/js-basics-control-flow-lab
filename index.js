function scuberGreetingForFeet(feet){
  if (feet <= 199) {
  return ('This one is on me!');
  }

  if (feet >= 2001 && feet < 2501) {
  return ('I will gladly take your thirty bucks.');
  }
  
  if (feet >= 2501) {
  return ('No can do.');
  }
}

function ternaryCheckCity(city){
  if (city == 'NYC') {
    return ('Ok, sounds good.');
  }

  if (city != 'NYC') {
    return ('No go.');
  }
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous') {
    return ('Thank you so much.');
  }

  else if (tip === 'not as generous') {
    return ('Thank you.');
  }

  else {
    return ('Bye.');
  }
}
