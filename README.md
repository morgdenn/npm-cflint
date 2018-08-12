# CFLint

CFLint is a tool for identifying and reporting on patterns found in CFML code.

This is NPM wrapper for the actual CFLint project [https://github.com/cflint/CFLint](https://github.com/cflint/CFLint)

A big thank you to the CFLint team for all their work :thumbsup:

### Global Installation and Usage

If you want to make CFLint available to tools that run across all of your projects, we recommend installing CFLint globally. You can do so using npm:

```
$ npm install -g cflint
```

You should then setup a configuration file (The '-init' argument is only part of the NPM wrapper).

```
$ cflint -init
```

After that, you can run CFLint on any file or directory like this:

```
$ cflint -file yourfile.cfm
$ cflint -folder ./
```

Check out [https://github.com/cflint/CFLint#user-manual](https://github.com/cflint/CFLint#user-manual) for all the documentation.

## Quick Configuration

When you run CFLint it will search the current directory and parent directories for a ".cflintrc" file.  If found it will automaticly use that configuration.

After running `cflint -init`, you'll have a `.cflintrc` file in your directory. In it, you'll see some rules configured like this:

```json
{
  "rule" : [ ],
  "excludes" : [ ],
  "includes" : [ { } ],
  "inheritParent" : false,
  "parameters":{}
}
```

The default configuration will only find parsing errors.  All other rule are excluded, this is done by setting "includes" to an empty object.
To include all rules again change "includes" to an empty array.

All the rules can be found here: [https://github.com/cflint/CFLint/blob/master/RULES.md](https://github.com/cflint/CFLint/blob/master/RULES.md)
