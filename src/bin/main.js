#!/usr/bin/env node

import startCreation from '../creator';

try {
  startCreation();
} catch (e) {
  console.log(e);
}
