import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-holder-left">
          <a className="footer-logo-title" href="#/">
            <img
              height="40"
              width="40"
              alt="logo"
              className="logo"
              // src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzhCQ0UzNDsiIGQ9Ik01MDMuOTE0LDQzMy43NTVMMzEzLjYxNSw3My41NDNjLTEuODgzLTMuNTY0LTYuOTgzLTMuNTc5LTguODg2LTAuMDI2TDExMS43NTQsNDMzLjczDQoJYy0xLjc5NiwzLjM1MywwLjYzMyw3LjQwOSw0LjQzNiw3LjQwOWgzODMuMjc0QzUwMy4yNTUsNDQxLjEzOSw1MDUuNjg1LDQzNy4xMDcsNTAzLjkxNCw0MzMuNzU1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6Izc5QjUxMDsiIGQ9Ik00OTkuNDYyLDQ0MS4xMzloLTI2LjczOUwyOTEuNTMxLDk4LjE2NWwxMy4yLTI0LjY1MmMxLjg5Ny0zLjU0NSw2Ljk5OS0zLjUzNSw4Ljg4NiwwLjAzDQoJTDUwMy45MTUsNDMzLjc1QzUwNS42ODMsNDM3LjEwNSw1MDMuMjU2LDQ0MS4xMzksNDk5LjQ2Miw0NDEuMTM5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RGRUFFRDsiIGQ9Ik00MDUuMjE1LDI0Ni45NGwtNC4xNTcsNi4yMmwtMzcuNDIsNDIuNjY4Yy0yLjAyOCwyLjMxMi01LjYzNywyLjI4MS03LjYyNC0wLjA2NmwtNjQuOTYxLTc2LjY5DQoJYy0xLjk3NS0yLjMzMi01LjU1Ny0yLjM4LTcuNTkzLTAuMTAxbC0zNC4zNjIsMzguNDUyYy0yLjEwNiwyLjM1Ny01LjgzOCwyLjIxMi03Ljc1NS0wLjMwMkwyMjAuOCwyMzAuMThsODMuOTMtMTU2LjY2DQoJYzEuOTA0LTMuNTUzLDcuMDA0LTMuNTM4LDguODg2LDAuMDI2TDQwNS4yMTUsMjQ2Ljk0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0NERDdEOTsiIGQ9Ik00MDUuMjE3LDI0Ni45MzdMMzgzLjksMjcxLjg5OUwyOTIuMyw5OC41MDVjLTAuMTUtMC4yOS0wLjMyOS0wLjU1OS0wLjUyOS0wLjc5OWwxMi45Ni0yNC4xODMNCgljMS45MDctMy41NTUsNi45OTktMy41NDUsOC44ODYsMC4wMkw0MDUuMjE3LDI0Ni45Mzd6Ii8+DQo8cGF0aCBkPSJNMzU5Ljg1NSwzMDUuMDMxYy0wLjAzNiwwLTAuMDcyLDAtMC4xMDgsMGMtMy42NDYtMC4wMzEtNy4wOS0xLjY0NS05LjQ0Ny00LjQyOGwtNjMuMTM3LTc0LjUzNmwtMzIuNDgxLDM2LjM0OA0KCWMtMi40OTcsMi43OTUtNi4wODksNC4zMjMtOS44MjMsNC4xNjhjLTMuNzQ2LTAuMTQ2LTcuMTk4LTEuOTM5LTkuNDctNC45MmwtMjAuNTQ0LTI2Ljk0MWMtMS43NzktMi4zMzMtMi4wMzItNS40OTEtMC42NDYtOC4wNzcNCglsODMuOTMtMTU2LjY2YzIuMTg1LTQuMDc5LDYuNDEyLTYuNjA4LDExLjAzNy02LjYwOGMwLjAxMiwwLDAuMDI0LDAsMC4wMzcsMGM0LjYzOSwwLjAxNCw4Ljg2OCwyLjU3LDExLjAzNSw2LjY3Mmw5MS41OTgsMTczLjM5NA0KCWMxLjI4NSwyLjQzMiwxLjEzMyw1LjM3Mi0wLjM5NSw3LjY1OWwtNC4xNTcsNi4yMmMtMC4xODIsMC4yNzItMC4zODEsMC41MzEtMC41OTYsMC43NzdsLTM3LjQyLDQyLjY2OA0KCUMzNjYuODg4LDMwMy40OCwzNjMuNDYyLDMwNS4wMzEsMzU5Ljg1NSwzMDUuMDMxeiBNMjg3LjIxMywyMDkuODA1YzAuMDU1LDAsMC4xMTEsMCwwLjE2NiwwLjAwMQ0KCWMzLjYyNCwwLjA0OCw3LjA0NiwxLjY2MSw5LjM4OCw0LjQyNmw2My4xMiw3NC41MTdsMzUuMjE3LTQwLjE1N2wxLjQwNS0yLjEwMUwzMDkuMTUyLDgxLjEyNmwtNzkuNDc2LDE0OC4zNDVsMTUuODIsMjAuNzQ3DQoJbDMyLjM4MS0zNi4yMzVDMjgwLjI1NSwyMTEuMzIxLDI4My42NSwyMDkuODA1LDI4Ny4yMTMsMjA5LjgwNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNBMURENDM7IiBkPSJNMjg4LjEwOCw0MzMuNzU1TDE1My40OTQsMTc4Ljk0N2MtMS44ODMtMy41NjQtNi45ODMtMy41NzktOC44ODYtMC4wMjZMOC4xLDQzMy43Mw0KCWMtMS43OTYsMy4zNTMsMC42MzMsNy40MDksNC40MzYsNy40MDloMjcxLjEyMUMyODcuNDQ5LDQ0MS4xMzksMjg5Ljg3OSw0MzcuMTA3LDI4OC4xMDgsNDMzLjc1NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5NEM2MjY7IiBkPSJNMjgzLjY1Myw0NDEuMTM5aC0yMS43NTdMMTMzLjkxMywxOTguODgxbDEwLjY5NC0xOS45NTljMS45MDctMy41NTUsNy4wMDktMy41MzUsOC44ODYsMC4wMw0KCUwyODguMTA2LDQzMy43NUMyODkuODg0LDQzNy4xMDUsMjg3LjQ0Nyw0NDEuMTM5LDI4My42NTMsNDQxLjEzOXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERkVBRUQ7IiBkPSJNMjQ2LjY3OSwzNTUuMzQ4bC0yNy4yOTMsMjUuMTU0Yy0xLjk4LDEuODI0LTUuMDQ0LDEuNzY4LTYuOTU2LTAuMTI4bC03MS4zMjktNzAuNzcyDQoJYy0yLjA0OC0yLjAzMi01LjM4LTEuOTMtNy4zLDAuMjIybC0yNi43OTksMzAuMDM2Yy0xLjgxLDIuMDI4LTQuOTAzLDIuMjUzLTYuOTg3LDAuNTA4bC0yOC45MjQtMjQuMjI3bDczLjUxMi0xMzcuMjIyDQoJYzEuOTA0LTMuNTUzLDcuMDA0LTMuNTM4LDguODg2LDAuMDI2TDI0Ni42NzksMzU1LjM0OHoiLz4NCjxwYXRoIGlkPSJTVkdDbGVhbmVySWRfMCIgc3R5bGU9ImZpbGw6I0NERDdEOTsiIGQ9Ik0yNDYuNjgsMzU1LjM1MWwtMjAuMjQ5LDE4LjY2MWwtOTIuNTE4LTE3NS4xMzFsMTAuNjk0LTE5Ljk1OQ0KCWMwLjI0LTAuNDM5LDAuNTI5LTAuODI5LDAuODQ5LTEuMTU4YzAuMTYtMC4xNywwLjMzLTAuMzE5LDAuNTA5LTAuNDU5YzAuMDktMC4wNywwLjE4LTAuMTMsMC4yOC0wLjINCgljMC4xOS0wLjEyLDAuMzc5LTAuMjMsMC41NzktMC4zM2MxLjMyOC0wLjY0OSwyLjg5Ni0wLjY3OSw0LjI0My0wLjA5YzAuMTQsMC4wNiwwLjI3LDAuMTIsMC4zOTksMC4yDQoJYzAuODE5LDAuNDM5LDEuNTM4LDEuMTI4LDIuMDI3LDIuMDY3TDI0Ni42OCwzNTUuMzUxeiIvPg0KPGc+DQoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8wXzFfIiBzdHlsZT0iZmlsbDojQ0REN0Q5OyIgZD0iTTI0Ni42OCwzNTUuMzUxbC0yMC4yNDksMTguNjYxbC05Mi41MTgtMTc1LjEzMWwxMC42OTQtMTkuOTU5DQoJCWMwLjI0LTAuNDM5LDAuNTI5LTAuODI5LDAuODQ5LTEuMTU4YzAuMTYtMC4xNywwLjMzLTAuMzE5LDAuNTA5LTAuNDU5YzAuMDktMC4wNywwLjE4LTAuMTMsMC4yOC0wLjINCgkJYzAuMTktMC4xMiwwLjM3OS0wLjIzLDAuNTc5LTAuMzNjMS4zMjgtMC42NDksMi44OTYtMC42NzksNC4yNDMtMC4wOWMwLjE0LDAuMDYsMC4yNywwLjEyLDAuMzk5LDAuMg0KCQljMC44MTksMC40MzksMS41MzgsMS4xMjgsMi4wMjcsMi4wNjdMMjQ2LjY4LDM1NS4zNTF6Ii8+DQo8L2c+DQo8cGF0aCBkPSJNNTEwLjUzNSw0MzAuMjU3TDQ1MS43MzgsMzE4Ljk2Yy0xLjkzMi0zLjY1Ni02LjQ2MS01LjA1NS0xMC4xMTktMy4xMjNjLTMuNjU3LDEuOTMyLTUuMDU1LDYuNDYyLTMuMTIzLDEwLjExOQ0KCWw1Ni44OTQsMTA3LjY5NUgyOTUuOTI4Yy0wLjIzNi0xLjE2Mi04Ni45MDYtMTY1LjYyNy04Ni45MDYtMTY1LjYyN2wxMi44ODItMjQuMDQ1bDEzLjQ4NSwxNy42ODQNCgljMi4yNzMsMi45ODEsNS43MjUsNC43NzQsOS40Nyw0LjkyYzMuNzM0LDAuMTU1LDcuMzI2LTEuMzczLDkuODIzLTQuMTY4bDMyLjQ4MS0zNi4zNDhsNjMuMTM3LDc0LjUzNg0KCWMyLjM1NywyLjc4Myw1LjgwMSw0LjM5Nyw5LjQ0Nyw0LjQyOGMwLjAzNiwwLDAuMDcyLDAsMC4xMDgsMGMzLjYwNywwLDcuMDMzLTEuNTUxLDkuNDE0LTQuMjY2YzAuMDI1LTAuMDI4LDAuMDUtMC4wNTcsMC4wNzQtMC4wODYNCglsMzQuNDE4LTQwLjQ3bDEzLjk5MSwyNi40ODNjMS45MzIsMy42NTYsNi40NjIsNS4wNTYsMTAuMTE5LDMuMTIzYzMuNjU3LTEuOTMyLDUuMDU1LTYuNDYyLDMuMTIzLTEwLjExOUwzMjAuMjM3LDcwLjA0NA0KCWMtMi4xNjgtNC4xMDItNi4zOTYtNi42NTgtMTEuMDM1LTYuNjcyaC0wLjAzN2MtNC42MjUsMC04Ljg1MiwyLjUyOS0xMS4wMzcsNi42MDlsLTc4LjYzMSwxNDYuNzc2bC01LjI5Nyw5Ljg4Nw0KCWMtMC4wMDEsMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDNsLTEzLjYxMiwyNS40MDhsLTQwLjQ3MS03Ni42MDdjLTEuNjI2LTMuMDc3LTQuNDExLTUuMjg0LTcuNjYtNi4yMDENCgljLTEuMDg0LTAuMzA2LTIuMjE5LTAuNDY5LTMuMzgtMC40NzJjLTAuMDEyLDAtMC4wMjQsMC0wLjAzNiwwYy0wLjE1NSwwLTAuMzA4LDAuMDEtMC40NjIsMC4wMTYNCgljLTAuMTI3LDAuMDA0LTAuMjU1LDAuMDA1LTAuMzgxLDAuMDEzYy0wLjExNSwwLjAwOC0wLjIyOCwwLjAyMy0wLjM0MiwwLjAzNGMtMC4xNywwLjAxNi0wLjM0LDAuMDI5LTAuNTA4LDAuMDUyDQoJYy0wLjE1MSwwLjAyLTAuMywwLjA1LTAuNDQ5LDAuMDc2Yy0wLjEyNSwwLjAyMi0wLjI1MiwwLjAzOS0wLjM3NiwwLjA2NWMtMy42MDIsMC43MzYtNi43MzgsMy4wMy04LjUxOSw2LjM1NGwtMjcuNDEsNTEuMTY2DQoJbC00Ni4xMDIsODYuMDU3Yy0wLjAwOCwwLjAxNS0wLjAxNCwwLjAzMS0wLjAyMiwwLjA0NmwtNjIuOTcsMTE3LjU0Yy0yLjA5OCwzLjkxNy0xLjk4OCw4LjUzMiwwLjI5NCwxMi4zNDUNCgljMi4yODMsMy44MTMsNi4yOTksNi4wODksMTAuNzQzLDYuMDg5aDQ4Ni45MjdjNC40MjksMCw4LjQzOC0yLjI2NSwxMC43MjQtNi4wNThDNTEyLjQ3NSw0MzguNzc3LDUxMi42MDQsNDM0LjE3NCw1MTAuNTM1LDQzMC4yNTd6DQoJIE0zNTkuODU4LDI4OC43MTRsLTYzLjA5MS03NC40ODJjLTIuMzQzLTIuNzY1LTUuNzY1LTQuMzc4LTkuMzg4LTQuNDI2Yy0wLjA1Ni0wLjAwMS0wLjExMS0wLjAwMS0wLjE2Ni0wLjAwMQ0KCWMtMy41NjMsMC02Ljk1OCwxLjUxNy05LjMzNiw0LjE3OGwtMzIuMzgxLDM2LjIzNWwtMTUuODItMjAuNzQ3bDIuMjY4LTQuMjMzbDc3LjIwOC0xNDQuMTEybDg3LjA3MywxNjQuODI3TDM1OS44NTgsMjg4LjcxNHoNCgkgTTE2LjYzOCw0MzMuNjUxbDU2LjcwNy0xMDUuODUybDIxLjg2MiwxOC4zMTFjMi4zNTgsMS45NzUsNS4yMSwyLjk0NCw4LjA0NiwyLjk0NGMzLjQzOSwwLDYuODU0LTEuNDI1LDkuMzM3LTQuMjA3bDI1LjA3NS0yOC4xMDQNCglsMTYuMTUsMTYuMDI0YzIuOTM2LDIuOTEzLDcuNjc4LDIuODk1LDEwLjU5MS0wLjA0MmMyLjkxMy0yLjkzNiwyLjg5NC03LjY3OC0wLjA0Mi0xMC41OTFsLTE3Ljk4OS0xNy44NDgNCgljLTIuNDI4LTIuNDA4LTUuNzctMy43MjQtOS4yLTMuNjI3Yy0zLjQxOSwwLjEwNC02LjY4NiwxLjYyNy04Ljk2Miw0LjE4TDEwMywzMzMuMWwtMjIuNDMtMTguNzg3bDY4LjQ1Ny0xMjcuNzg1bDg4LjMzOCwxNjcuMjINCglsLTIxLjMyNiwxOS42NTVsLTE5LjUwOS0xOS4zNTdjLTIuOTM2LTIuOTEzLTcuNjc3LTIuODk1LTEwLjU5MSwwLjA0MmMtMi45MTMsMi45MzUtMi44OTQsNy42NzcsMC4wNDIsMTAuNTlsMjEuMTc2LDIxLjAxMQ0KCWMyLjQ0MywyLjQyMyw1LjYyOCwzLjY0MSw4LjgxOSwzLjY0MWMzLjAzNywwLDYuMDc5LTEuMTA0LDguNDg2LTMuMzIzbDIwLjE0NC0xOC41NjZsMzQuOTc3LDY2LjIwOEgxNi42MzhWNDMzLjY1MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0"
              src={window.favicon}
            />

            <span className="footer-trails">MyTrails</span>
          </a>
        </div>
        <div className="footer-holder-right">
          {/* <div className="stay-connected">
            Stay connected!
          </div> */}
          <div className="prof-links">
            <a href="https://github.com/gevorkia/trails">
              <img
                height="50"
                width="50"
                alt="github"
                className="github"
                // src="https://p1.hiclipart.com/preview/347/293/202/cat-icon-github-github-pages-user-computer-share-icon-source-code-black-png-clipart.jpg"
                src={window.github}
              />
            </a>
            <a href="https://www.linkedin.com/in/liligevorkian/">
              <img
                height="50"
                width="50"
                alt="linkedin"
                className="linkedin"
                // src="https://banner2.cleanpng.com/20180518/yk/kisspng-computer-icons-linkedin-5aff0283a31f04.0344839015266617636682.jpg"
                src={window.linkedin}
              />
            </a>
          </div>
        </div>
      </div>
      //{" "}
      //   </div>
    );
}


export default Footer;