#! /usr/bin/env node
import Debug from 'debug';
import fs from 'fs';
import request from 'superagent';
import cheerio from 'cheerio';
import notifier from 'node-notifier';
import nodemailer from 'nodemailer';
import program from 'commander';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const debug = Debug('crossfielder');
const homeDir = process.env.HOME;

debug(pkg);
debug(homeDir);

program
  .version(pkg.version)
  .option('-n, --notifier <email|system|both>', 'The type of notifier you want to use')
  .option('-to', 'The email address to send notifications to')
  .option('-from', 'The email address to send notifications from')
  .option('--smtp-user', 'The SMTP user\'s email address')
  .parse(process.argv);

debug(program);
