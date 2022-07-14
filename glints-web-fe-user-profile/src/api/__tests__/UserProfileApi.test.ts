import HttpStatus from 'http-status-codes';

import ApiClient from '../ApiClient';
import UserProfileApi from '../UserProfileApi';

import response from './data/UserProfileApi.data.json';

describe('UserProfileApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    it('should make a correct request to the users endpoint and return the user', async () => {
      const email = "aa";

      ApiClient.get = jest.fn().mockReturnValue({ data: response.getUser.data });
      const user = await UserProfileApi.getUser(email);

      expect(user.data).toMatchObject(response.getUser.data);
      expect(ApiClient.get).toHaveBeenCalledWith(`https://glints-web-be-user-profile.herokuapp.com/user?email=${email}`);
    });
  });

  describe('updateUser', () => {
    it('should make a correct request to the users endpoint and update the user', async () => {

      const payload = {
        email: "aa",
        name: "aaa",
        age: "2",
        'profile-image': "data:image/png;base64,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",
        'work-experience': [
            {
                id: "37",
                'start-date': "February 2022",
                'end-date': "February 2022",
                'company': "a",
                'job-title': "a",
                'job-description': ""
            }
        ]
    };

      ApiClient.patch = jest.fn().mockReturnValue({ status: HttpStatus.OK });
      const response = await UserProfileApi.updateUser(payload);

      const status = {"status": 200};
      expect(response).toEqual(status);
    });
  });

  describe('addUser', () => {
    it('should make a correct request to the users endpoint and add the user', async () => {

      const payload = {
        email: "aa",
        name: "aaa",
        age: "2",
        'profile-image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABMMSURBVHgBtVt7jJ3FdT/n24eNX3ttng6wXkgp0OLaKFQqtakX1KoCk4RWlQo0VexIFaBKtRtVSVtVst2mbUqVGDctEPUPx6mw+5KQlZgq/cdrY0PVii5+AAES79om8dt7d/3e3fudnJnzmPl279rr18jr+33fnW9mzvt3zsxFuM6t1vd6V9vI1G5AXICIXQTQhQg1AuzC0IFvAAvi//cTUJ1v+qEo3oUSdg0DvFu/69F+uI4N4Tq0mz7+Xjc24Ckm7PNQYFdlmkBwuEckuyO+RrmMTxDz/kUf324bbdCG43c92gPXuF0zBtR6X68V01pX8IAr+a+mRIYpKNDkUxVR2vGGtUCY4AQL8awJIF2MLcqbomDtgNUwUm47fI0046oZEAmfWgjhiDWRphIsUo5XSqkwRWUvxOpzyJmgWhE5pOOkQUP/Af5YB6PlhqtlxFUxYM4PN68AolU8yGyQtUZa0W5QCYWcUEhmkPFF+qOKPjEPVENIx4Wx5lEUaw7fsXgDXGG7Igaw1LtappTr+fVuHyJTYzC1jUSo/vt/OTHaD0C1Qd7B9NDHUeIJEmfVtKK29GFr47HDcy9fGwq4zFZ7/z9XFG1lLxEs4T+Qf2EVJrAoRH/MZEX5hgcUXyDtQ0D+jjwW1lASCskX1k/mk3fDuKTf8cVdONrSe+v+bSvhMttlacCc3f+xlpe3kj07iVUG4RSBRPHi0aWDS85t3ByivKGPTKoFud7nGlOotG2ZHjUwaZuMH+dOrqVYffjOR9bAJNukGTBn77+v5xmWVVU8HyJT5VxlKzYd6BI9TgxC4V+KGj5ORijJc7MOd4fOCAs0cW6EDYfv+LXlMIk2KQbM3vNvvaxrC4O0bUKA5KmDFG1NmVdTqZvEi6CvKKDHwv54AioMyL5Pc6mi+TiFO0sXiszYc6RzyaOXou2SPqC2e9N6trMFkWAqwewuTBLsVcyyxEicySmzbZcj9xGSNLqpfUda5COaO1TtPbsRP5J8gt2X6H3E4kitrfuWA9vXX4q+izKgtmvTKiZyWXRMGVG6UmUESZTTZ84E942lM8wcnzMOTHFIbZmcGLFuQnemfK2cFK0qmaHKdCobsgZ9RuTjLbv1wPa1V8SAWb2vxRgv66EKEelCr40JsWvpkYF0Jeb5ZxVtsOiGG+FrN/8C9HQuxl+ddqP1j2OQRwjIxwAydpYm7dJYQRoXnVmufS40Wnmx6NDUB9R613cBtPWGy3Gx2N8U3pmnd4wSngcJqt0unnYz7jx7PBpCZ9t0+P9P/7oP8e2BPviLY+974HPg68aSHGTFuVLyF9VIA9l7Flgio+rYKB9shhqbagBB69ZAvAdz0TM0tVYOj4vtYtslPDC1Bt/61EOw794ncfO8xcCSjn33j5yhgyNnfYgnZtwaTATNn7jJuwso0VeQ+wHI5xT+pbXZd+FSzQ+wA1qK9c1oHceAWu93l/FbXZkqZQMS5AgHUqAGyNS3o6UVnql1QgerfGjzp3aA2ecbpw75XHe2TQt9Ep+ddIryrhBvnyVFQQQpq1M01EXaFCSVqhEqPIJuNoUVF2VAUH0qI7aPL7pUEi7XwZIzKxWW5czaeeY4DTZG/JXHZ8x1xu0I5pA11gJM9q+MlfGVvlLp8CWIsKM/cEmj+yJjlMkje40HWl3r21rL52/Nb3hMzuqC9CESrVRhnKyQeBtjcaGaF2JyNI0IVCiFwBJ3nDkKS2fdHkeYzyZRY60YaozCW2MY8HTHnTCrpQ0emNIBGk5wqByF94ZP4Y5zJ4PJRCF4hlWAilxpFqoNIojzBwellGtSMIX2oghasMaf2EXtbZZ+G7DjQ+FQIQmH9as6JnBn5Tl99l14/tyN98DfzF3ohH6ufzvsPT/ITPkUfO3WX2IzaYPJtBdPfAR/f/JHTVNnzAGSPACAKuRGh+UsFnlWHy7pbq401SOZPlNL2U3R8ZFEZvMvImnK1d5UstQ+ClIpT3zeGPpJhZB/6XwY9t33WXaOn5k08aF95caf57B5v2hWRNGUHGIluYJ0nWMW0OBIjidmTy3Aw6IzgLmzSgAIuC17XLb4q3E2DVYmmysjGgzqTEtnzsWgAXkzh3gl7bnaXYwf5sQ5dO7kc0oxwUqEAuuSgTVdr2AKdGcYv5jxf//czYq0Nc+0NBkhgkpZKuXkkq2xNNtxwbQ5sIhD2qLpt8DiGbfA9Wg7z52Apw7+j2iB19jGmMW4WkL+qT7M8AHBo4wLeqITLErO8swbiKqJfylJizQFWcGH1OdY3v4yq/bSjjtgsi1Eh73n67Dl9KHo4PacG4RaqzjBr7Cqd3JobNYemDLLIoT4WjD6NNbph4MyhUcZenXGSIwon+K7Ho0CtETpTs2HRFX1IsIKTcbU8wPsOXcSJ8uAPUz45/q2wVA5IhmLRo6Do8jfDcJ/nT6MmzsXM5DqGPduMKE7W27Ag6PnsqzTgIC6nyJmnOBOSfyZhKsEslQFuGLNdcxi6tuvdPF9V0674XczfENlynpycMQT7zx9BCbbAhQeagxLeAq89CxSErh6Y4Q2DR6Y8P3IuOB8XQ2MKNRllY5OyTMqcOfoyZT07bqtb2tX0VYUC81LUgY1PQXJwEWArSkFFpD05tBh2DJ4EP7sk3dgwQebafaujfR3R/Y0JSB4/0XTb4YMvYGMQmSLDObRrO29MAj1ckQ4RYr0QCG0qqt4B88oEfUv+cwMyXJrACwJer0AUh2O3GMa5+wPPWsHh1hSx6Qv7OuBV459APvPn4pe+m8P7WEkONyUEGWALwhLSiks/z3NELpZ+/bJfR4FBAdVQqJmz6mm4JpAWeoOZrt6UzYeLJiAhSkNNXlQIhV9ODSz8MKl4QTlnaLiKIU3Bj+ZmAHGXDBdE1z/bEcnPtMxb9w7/8pmsePMcYfJBsdVCDYK2fypsADqAyATJ7n2MtbrYmBZdmVYO3lTSq+oGhnKcGaDLpyIKnl1uH9zAt+wmENlR9EKBprCsMHz/9PtD+E/3v5Q03ee7uiE3p/7DfjxPY/jtxhddrZOc6n7YjNTFacouASyOgPmJixMm9fKD+JuTqSg1LJVUaj8EQzzy6cLTsp+0eNKfJVrNDdLrAEIE7RFjBX2nqvDEx13EOcLyFoxYd+8hUjwDDPjiZlzGRO8xZFjSJQAhcZIOEcCitUjVN0ChcuKmG27SQqtNZzx1sslQLb7YoE1K0J6s4QooaUMb8s3xp3w6pv3LYX5N8yG69FCXaG7fxsMcmQQkKNz6/IkGapus4FVmrP8oTCAoBaQ6mnuPSs5P+bPwfIAcATiTidowY5Th+F6tVBLeG723bqUEi0l1giVxz83jzx8W5RrFQ9vBALkxmxfqdhBbV5UzbmcYkuq7gYOlxjC4wu33H9RQgQZDjCgqkegZBWjgBmeu+memEpP1BZxpUnYH0CQRTCSkrmYrAM2gKyi54kVYCs5fVKuRudYrv06iSXiaOlifBPVECV6YBpr97kBGbpJ28JR4tXjH0aimQluevkO0MZ6f0ypnx+TWCUG3BSwRSi+YMjmVP8jXlHdh1CbkIV7Qd5anLJgx7ffMjnJaLPAl2V+MQSVlGs85f872lJ+BQkMjZ7Hicwg4IQdp48qXkim5/zWyxePvg95dWlsm4Wt6K/k5OXDqMqrxvp33PrDTlVdiw1exJYeZWb6lJWgyArgaAOORVsCFmSkHROEQ8kf1CZleywLbYmx9cYwDZbDEzLgzvZpKf5TKqGJzlI1OpclQMI8gcZ6AEL9Bg60mJhSKIXTWU1JFiYw1HMCl5wOHCZScM144DA1Wzin0fAARwj0MQ3nlN5H6w3YUbTDRG3v2brXCDAr3rhQLD8AsszReYAl7i+o0eg31a5UWmDMRgOoitg9pSKJmo4MmnrHy51Dh3AiWLyY439pyAyMCYA5U7/KmygTVZAODJ+FoB0pMaLqJxmaYeGWCogc4bFSF2VvCIO7XLUhaa8RZIORawP44uLiEXOfQKV9rfOEq4n8wFIuiFYciGkQ/1crWvGv2QF+9dZfhInai8feV15raEPVgqTAJlDLFuzVGDZbGvBua6MBPVywFZsJgxS2i6vne6QgkN6jLCiqpZNeZ3ag3jxOGx3h0iZJTgBJtaINQ5YnBCB1sFN79sZP4/M33Qud7dNhohbC5saB/rQzhSnHSTtKttSsMpx5hQs0siveTtv+Ul84w+c99ABTogYglcvQiwzj0CJCVrVFZ1PnlJm0Z/7vNA2HT37836zKZ2DxzNvg2Tl3M1PmXLJoupNL7r9/4G1Jj6MHRfIDM74NL9d2AMnLelob4USo/9i9n70rVoRY8pu55x9JR8qVWF7TfRrB2lVBV7idVeH9ir85cGEID1w4zYyYMY6Y1+7ujg5xMi2Ew1ePfwRfP/YeZQeFKEWO8FmilcLcN6ElraqcoRcVPeE6MqCBLa+zN1yhbHNzqOQBZSQePOtKE2eHnWgcsAyKMm/KTOhobW+qAZMhPhJ+4kN69diH7FBHVRNJMX2q9fm0qCbpCZosyoRFUtPcYKuObdq2teHsXc1OgUhipCOjH+kwwv2Mj2+OmPqrScxrnwlLZ3fBk3PmsXrPhStpwTT+kFU9oMVYDoMskXGmg1WwwU6f5Rs0AJmPAE+W+k7c9/m7w322N1iuE48mYCGr1wFQ5URW5SQrZUxXbxjVYD6Xyr8+71cui/g9Z0/C2JAZgNTg6DBQpRjjia6tgVKSE4EIKtKDVAuwRC7errHxnQHtZfESdx9IwSjFVgtpGTQE75UxyEJn+Lf77AmYbAtRonPXJnrkwy206eQ+j1UhCnROmW6HbyqHLwSHmMNKRR/0ejPlETutjmigAeW2cQyoP/rHdf56HeQeBaHq8ChhAoetFQzvlRgMEHYsofsvnIKXj7wHL/RtHyfpodHh+O73B/ZXfMUTs+6QzVlKp0MSOMurO0CVcCco0DVYqtpBULCufv9v9Vuvyu5we4nrhgtayZ1rFsYEW2OT2Jrif+aISM0Th0bOY330AmwZ2M8S/im8eeoIHbxwSgyRscYjvH327E2S5YUQGLbUhjir432GyBxzjot5x+nVoz80Aad1kGqob5CaOZSgx+/R6kHgx3ehryxgQ05z5XxA0ALutDrjIKQ9ljGnu0zaoAUQSM9MRzrf+Q48v6+HXjv2UQiFkFVNmCmH8qnhkZm3xcEHmWnBF1gLDCDFc+BITxU6a3keZ5gUiXIzCbxak0t/HANCO7fky+wMsUcLHan6SqJSORH2maCzp8ae43gAzmwyLOx7A5V1MKG3ySvcY0tdNkeCb3jl6AehFoiaI6Cpu0Nb8hQ+bZzq0RrKnB9/13fi/t/eMJbeVmjSGiUsLwrs5Sk71K+I/C1tlhisWgEAmTASMis14ih2SJ9RkYNnP8A+gVFifC9A5T/95H/jYN9nBmw88SNHerqxqdFfoG22YSsEm9qLpM0hKGrDkzQ6+lgzWluaPRzd8IN6+/LfPM+Xj2eUOfpCibAab3UlckQVHRMo+tT6oKZkCSeExuAoxvqNxz+GVT99h4L6hz4B+FygBmJKNypgx47IKlcSWvG1KvxNuvnn9QVP/6AZrU3RmbUber6xFgveS6+U/XVNirkd+xeFG1wORhJYKbLZMBsnHZAeV70FSGNkc3pOAgCV3yD4mWIRgBgNrqnP/901E9F4UQaENq3nG+t5rGWVl9KZ4ZQJZr/7qZzds8UZigPIkqd0mNrOIwAB5oxKKE80UIWbhI+GWm1PGBMSBPjOyQXPLL8YfZdkQGTCtm8Gf7DACwzp0AHkUobxv/gQ2zSpJQk5yjaDhSKTrsLWQmlMW58wdr6q1F0zYpl4a33hM49dirZJ/WDi7JIvP8iO5rtuhLoFiFQ93ppMxdFZlh1VAElCmhZN/BiObZ1r7d5RqD9TkCbbcrYNhh4N4jjrJ0P8pBkgTPiTZfyx2mwLNDsQxytMkAX7Ab9IsKekFo8x9QfMwLMVH6kaz8eiUCTfkNQzPwmPysD4Un3h731pkmRNzgTyNn3r2pWE5SomxHcs0hG6ataYdLXIzL4QknDMuX9fil0GLc6ijAfCTNXtK56LJclQvvjL+me+8BJcRrtsBoQ2devaLp5zK9MyT7I0xNzxya825L4AzA8bZo5ufCQwH4DZgSZyovWHERmeQK+7Qc+FFvrS+QeX98NltitigDNi2ze/WAh07tLRSD1THp7cYwtV6YeTrhbu2hDyEJcghrme3NGF22KA9emv6r+8/LKknrerYkBoog3lCpRQWUtaXyE0SX0MPqjGfMTcdJoVNgRrQThHs65oLdbVH1xeh6toV80Aa4ERLVB2c1V5FQSNUOBSKa1lQKaypZ59L2oPrt7yIys/mjBAUPxDa/vVEw5p9mvfZmxd2122wBdZZN2sCfOSQmc2T4CppF14ybLwsqw4TG79TP5mLkluPv3wH/TANW7XhQF5C5rR1gILGwQLmboFBbZ0lWVZw5ZiHmS1Rb7sZ34MMKH9RUvRj6O0e6QFes4//EI/XMf2M4miAy1L4tuhAAAAAElFTkSuQmCC",
        'work-experience': [
            {
                id: "37",
                'start-date': "February 2022",
                'end-date': "February 2022",
                'company': "a",
                'job-title': "a",
                'job-description': ""
            }
        ]
    };

      ApiClient.post = jest.fn().mockReturnValue({ status: 200 });
      const response = await UserProfileApi.createUser(payload);

      const status = {"status": 200};
      expect(response).toEqual(status);
    });
  });
});