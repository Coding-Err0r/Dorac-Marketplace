<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://rhine-one.vercel.app">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dorac Marketplace</h3>

  <p align="center">
    A nft marketplace made with Nextjs & Solidity.
    <br />
    <br />
    <!-- <a href="https://drive.google.com/file/d/1oC_mWtU_nYJwzwnwgywwpvy1WZWieX1h/view?usp=sharing">View Demo</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#demo-images">Demo Images</a></li>
    <li><a href="#tree">File Tree</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is called Dorac NFT marketplace. Where user can easily connect their Metamask wallet and buy nft and sell nft. User can also see the nft they own from different market place like Opensea and resell those. This is currently on the rinkeby testnet . Support for ropsten & kovan is coming.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used for the project.

- ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
- ![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white)
- ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Demo Images

<img src="images/1 (1).png" alt="Logo" width="500" height="300">
<img src="images/1 (2).png" alt="Logo" width="500" height="300">
<img src="images/1 (3).png" alt="Logo" width="500" height="300">
<img src="images/1 (4).png" alt="Logo" width="500" height="300">

## Tree

- File Tree
  ```sh
  ├───Dorac
  │   ├───.next
  │   │   ├───cache
  │   │   │   ├───images
  │   │   │   │   ├───CpNSz-75PieCd0wGQNE7wM6R85qbR9FA0uyowh1uSNQ=
  │   │   │   │   ├───fHQKM81NZ8mKvqeCzObopyE5zmrEskhqNdtoSPyxq9s=
  │   │   │   │   ├───K4yaKuFjWeUELZzDtTas5l6JI8EdYBNVCEPqZNKlipU=
  │   │   │   │   ├───MDFHDcRfTeG0hHo-9e9nFPOdRP0hf6a4ZEwX4E3sd8Q=
  │   │   │   │   ├───u9PVxexKiV+uzftivcDOrvQDERhdtGaK0jSf3dhEf1g=
  │   │   │   │   ├───XQEu9Iov2XMbClbAG4RpjGnQBLFh0kIpSeTZPe+R1Kk=
  │   │   │   │   └───zH-IxQcPPOaYcouH7vgkfN0X2liNGL4QIKW-fPD-wWg=
  │   │   │   └───webpack
  │   │   │       ├───client-development
  │   │   │       ├───client-development-fallback
  │   │   │       └───server-development
  │   │   ├───server
  │   │   │   └───pages
  │   │   │       └───profile
  │   │   └───static
  │   │       ├───chunks
  │   │       │   └───pages
  │   │       │       └───profile
  │   │       ├───development
  │   │       ├───media
  │   │       └───webpack
  │   ├───assets
  │   │   └───img
  │   ├───components
  │   │   ├───button
  │   │   ├───card
  │   │   ├───card1
  │   │   ├───card2
  │   │   ├───footer
  │   │   ├───layout
  │   │   ├───Nav
  │   │   ├───navlink
  │   │   └───utils
  │   ├───hooks
  │   ├───pages
  │   │   ├───api
  │   │   └───profile
  │   ├───public
  │   ├───styles
  │   └───utils
  ├───images
  └───server
    ├───artifacts
    │   ├───@openzeppelin
    │   │   └───contracts
    │   │       ├───token
    │   │       │   └───ERC721
    │   │       │       ├───ERC721.sol
    │   │       │       ├───extensions
    │   │       │       │   ├───ERC721URIStorage.sol
    │   │       │       │   └───IERC721Metadata.sol
    │   │       │       ├───IERC721.sol
    │   │       │       └───IERC721Receiver.sol
    │   │       └───utils
    │   │           ├───Address.sol
    │   │           ├───Context.sol
    │   │           ├───Counters.sol
    │   │           ├───introspection
    │   │           │   ├───ERC165.sol
    │   │           │   └───IERC165.sol
    │   │           └───Strings.sol
    │   ├───build-info
    │   └───contracts
    │       ├───debt.sol
    │       ├───DebtNFT.sol
    │       ├───dogNFT.sol
    │       ├───interface
    │       │   └───IERC721.sol
    │       ├───NFT.sol
    │       └───NFTMarketplace.sol
    ├───cache
    ├───contracts
    │   └───interface
    ├───scripts
    ├───test
    └───typechain
        └───factories
  ```

## Getting Started

Download or clone the repo and open in VS Code.

### Prerequisites

Install Yarn or npm.

- Install Yarn
  ```sh
  npm install --global yarn
  ```

### Installation

_Copy the repo & install node modules. Then give the environment variables & run the project._

1. Clone repo
   ```sh
   git clone https://github.com/Coding-Err0r/Dorac-Marketplace.git
   ```
2. Install Node modules
   ```sh
   yarn install
   ```
3. Run Project
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Read the official Next JS docs for more information.

_For more examples, please refer to the [Documentation](https://nextjs.org/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@ErrorrCoding](https://twitter.com/ErrorrCoding) - rhine.cse@gmail.com

Project Link: [Porject Link](https://github.com/Coding-Err0r/Dorac-Marketplace.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub badges](https://github.com/Ileriayo/markdown-badges)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
