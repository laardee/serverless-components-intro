const { Component } = require('@serverless/core')

class MyComponent extends Component {
  async default(inputs = {}) {
    this.context.debug(`MyComponent [${this.id}]: create with inputs ${JSON.stringify(inputs)}}`)
    if (inputs.foo === this.state.foo) {
      this.context.debug(`MyComponent [${this.id}]: no need to update`)
    }

    this.state = {
      foo: inputs.foo
    }

    await this.save()
    return inputs
  }

  async remove(inputs = {}) {
    this.context.debug(`MyComponent [${this.id}]: remove`)
    this.state = {}
    await this.save()
  }
}

module.exports = MyComponent
