# CFLint

CFLint is a tool for identifying and reporting on patterns found in Coldfusion code.

This is wrapper for NPM for the original CFLint project [https://github.com/cflint/CFLint](https://github.com/cflint/CFLint)

### Global Installation and Usage

If you want to make CFLint available to tools that run across all of your projects, we recommend installing CFLint globally. You can do so using npm:

```
$ npm install -g cflint
```

You should then setup a configuration file:

```
$ cflint -init
```

After that, you can run ESLint on any file or directory like this:

```
$ cflint -file yourfile.cfm
```

## Configuration

When you run CFLint it will search the current directory and parent directories for a ".cflintrc" file.  If found it will automaticly use that configuration.

After running `cflint --init`, you'll have a `.cflintrc` file in your directory. In it, you'll see some rules configured like this:

```json
{
  "output" : [ ],
  "rule" : [ ],
  "excludes" : [ ],
  "includes" : [ { } ],
  "inheritParent" : false,
  "inheritPlugins" : true
}
```

The default configuration will only find parsing errors.  All other rule are excluded, this is done by setting "includes" to an empty object.  To include all rules again change "includes" to an empty array.
