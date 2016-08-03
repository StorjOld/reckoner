# reckoner

Network usage and accounting API for the Storj network.

## Usage

### Installation

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

When starting the server there are a couple of parameters you can pass:

- verbose - Enable verbose output
- release - Enable release mode, which will generally disable debugging features

Hot reloading is in place, so you do not need to restart the server on file change.

#### Environment Variables

The following environment variables are supported:

- PORT - defaults to 1234 if not set

### Deployment

If you want to deploy your application, simply copy the build folder and invoke

```bash
node server.js
```

# License

```
Storj Reckoner - Billing and Network Usage API
Copyright (C) 2016  Storj Labs, Inc

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

## Terms

This software is released for testing purposes only. We make no guarantees with respect to its function. By using this software you agree that Storj is not liable for any damage to your system. You also agree not to upload illegal content, content that infringes on other's IP, or information that would be protected by HIPAA, FERPA, or any similar standard. Generally speaking, you agree to test the software responsibly. We'd love to hear feedback too.
