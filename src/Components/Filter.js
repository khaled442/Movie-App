import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Form } from "react-bootstrap";
import Rate from "./Rate";

const Filter = ({ handleSearch, searchValue, handelRate, searchRating }) => {
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABFFBMVEWOtcYtPEEREiT////6wDh6m6sAAA0nNTmQucpng48lMDMhLjKMssMlMTZzlaIQHiTz8/T/xDdZcn0aMkHVqDnU4ekqOkEiN0H/yTcAAAA6RUDZ5erDmjqwjjqYfzyAbz/yvTi6lTt2aT0NLkHntDpHSkAAABeghTuSez0AABUAABwXKzFPUD8tPj9lbnHp6uu5vb58g4fb3d15eYGUlJovMD0fIC+xy9YPJiwAHybGycpHUlapr6+50Npqc3aboaNsYT8AKkEAJEHQpDpBQUxcXGZkZG5IXmZxeHmTqLAwREuPlZZJVFZkeYFXYWXP09N+jpWpu8JcWD9wYz5KSlQZGiyGiJIlJzNgYGl4eINERFA0NkKDdHScAAAOAklEQVR4nO2cCUPiSBOGDaJBAZcQ7AYVRbkEPElEBnTAUWSGOdxlODz+///4qhOSVCAwzn5iwmy/rsZ0APtJVVdVd3p2aYmLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLy8sKhdzuwRwUCoUC19tu9+KtBVSXm5Hl5eVLt3vylgotXW6eLuva/FOcMbC0sra5bCnyB4AFAoHQRrQjlr4isOWA2936PwVQK987QZEIgvChhsAuF9hkENQDa20hKAq6iIDAFnWQ6UF9eflzSbAUPl/wQRZYCuhBHfovIjChhJxxwQYZixQrUWSZsyoCI/WIeeF6gUwGVCtr7U5YrJ5ZZJ/D2GQW8vaCgEE3QxttQdRdT7QsE8G+KHx4MC8sAJgWKb50gmFzQIU//9oZvV5VmeWfzTIl5IwfcQCx0rSnBxnEPxbUNdVslhGQM9oiY9VwxlOvggVgUEXplWWZc1vOws6IL5COlwO+Vv7VRRhU4qnZ/0iHYMugnOXsjF6rqqBSWlmrC6NIIZ5Y/a99wD7XsZzxFJtMKI2c0UtVFSv/rre/lZAFqtOcMTg9TY8s7BUwrfxjZijbDBB+jTOe2NL0V+8MskBg6cu26VtfMZnNGW3IonXh1BYZP5ThJmy6nshY+bfWXg+WrX7WsWVK2BmxZbAzXpnIEHI6368DIXeXqszyDzr0w+pm2RYmBOSMmNhWzZ9oNhODnfbaylLAVSi4p9qcXhTJhGXszvgROSNGFnFkrIrhYH1tJRRwd2hBpIBKqYzjn/DBsozdGXE1fz6lml++im4wB3ATCvz/8lqHaNgsg5zxwR4ZUQFli4yjaj6yfe0ykzZTXPvHAvhmKxqmOePUap45I0C5vaitlX+d9WDd6uYp7qZQQpFRmOaMn417AZOzejTkcvhjDrjyvS1qlRJeApzujDZkXM0DMSFhsR7dcD9ShC4hqIum231AlvmBnbH6OmcMCtE1qL7chtLmVFe2oYGc0V5AlVDOqtuQLWc83VhxOVSE9KCud+fEFiYa05wRFVBOzsgqJZfHlDmnN+5zyVYn4QJqWmTE1bxY/RzZvnS7UmJclyjdarpymltMOCMpTVbzUJwI7Q3345+m0PXyuF7pjCgysmpeDAta+eeFSYiuCbCxiS5yxm9Tq/lqPep6+TemUGSCzB4Zp1bzxHBGGFQhL5lKV2hzAsyes7AzTk4tWfnniTE1odDlJFhZtNVJjlNLIoarZyyoe5KKKXCqK4J88spmmW/WhVE1L4rhTnTDG+FvqkLbEQ0LflpoM5wRgnrH/fLvl4I5/9+ff9S/nZyfnQKa0X97NS9iZ9SCutvd/qUCK6ySFwkRxVKnAVYzjOacs1il5HVT6YoGkc+VOg8Wmb2ab2hQHikqXqH2OvY4qB7OIoY3ogIKIkXb9YWy31GgbVu/1GJ4zSTTnVFcD7fZmtLiUAHX2rowLiJYsbEO0+j6dzanWohRZSk0bi+m8FfTZA9t7wd1JwWiTmAQ2jWTub9Q9q8VcOSCbKyXfws0puwKrFhrtQQFfbG9UIFiUoE1E0b80Ti3yDoLjWUbYvVarfbVIgsZYuvBpszWEG5d+letDh88DzDxY+2sZj3SJ9ebI/0TRTJbr3HrP0br5nfU+mV71Lj9N2pdM166/QV/hP6hb0eGLNYBiyFfLBvx/jwoGgpbizpXVbNVtFZ0yqjVejgbEdFrrTnCj7DZGtTX8d5wSxUeY/XBRzOSkLpR4+PtT2FrtfvEmoSiZQPkymijANraQazFkzKaOoz27rzlXjEUFQURRcWPRobGe2xK5q4uPKFB6zkd9GHW0zC0swOtKjeC6MWRNwcLCI4qXRlTaeSdaLsrnlxXTU/Eq8HIE/FNsDwRPS00VpTfFOy7c4Y2i0XUK+SJaDqD1gy+IvNXzVa8ych6wIHXuoxdZG+6bTFEbI/AjRvr5InVX3kiekqGPBEtvRJnTyxF5gDmVN2LddNg+CmyuaNrmifiVhQT8Q1z9ETjqdPbbjQNRPETcO0PQax3iImioycS64kL9kTBKSaiNbwyNpjx0OmNd9COk4lsbWD0p/DuGuSJ2AiWJyIjhB1jIrESA/JEazvjW28NhmSGYkH1pGxy2WIiys74iZGjJ1q7VU7REMbZGXmiuTPkzfc8B0LRdcYGhUG1fobW3yIoMeHsjO4Dys54ODp64szsPA8wtkVgI9pun5xfPaDFt7fOzlNiorXLez671AOBS30hGC1yn+MSydETS47Z2fLECH6tc0y09ijNaft96NJOBUK9cs7OBGVnvCHTbH19dp4n2PKYpmRn3CvLE0XHmPjr7Fy17uW7gf1WdnauE9Frg7Oz8zuCTcvOzjOW38nOeOCh/UnvBVZz7NVvZeeTX2VnvD3p3cDmlp2/OXvi3P5R0uVyBOvUnpiMZlt2Nl9sy86nRqvtJjwYrbabcGb9wfltvg+t/oUVXLcU/FettubqL168ujEnLAD7a91F/TVHMDyo311hDsbBOBgH42Ac7F3AZBAr9ygcKRzJqIHqzQQaKbsgj+SwJOsxMK2H5DifTCaPiCDvwvEAILZ2b2PJrkwPk8ktuH6UTNJ88lCWkyMdEevdXgQjW1nNIFspSYrnZUIl/ZiFc9DezW48fkgFOR+PyZl4LJ1m15maVHv70Wwy98Do7iHVwfx+f0yme5LfL+XldEaSkvmU5M9uSdJtWpBj0iHNSAzMn9oH7WhEpLsjexQsHYNu6xbbl6Tj9L60A2DpA+C6STfhZzom+WWyFZeyRAeTYjfmGJN3JU+C0XSa+lMEfjKwPfA8sAoc8jf7UhxMcuOXMjdJSWrKh1KMCiOLaWDsZqTTn2Lx5k16Bps7YCQPAwY8D0gogHVj0k5XyhzB6Scw0xaAZfx+ucvOb8E9DTD2hvgxoQf+OLwdft859hiYIHeh52CVrsws1s1LqaSURGBspFHwwEzaLzUpBpOOCQTOWzjx+w/TXrMYkGVZzDim2hjrNlmnm8xCNzsSjCnhJiWl5PSOlNqTMpQIxhjLHh0daRa/icEb9mZwuQZG9+KpVPxAB2tSoExRBpY+hPEmUwgZOyxQShlpX7bA2Bij2j+Oi0sQc2aFD9csdhvLZjMQsgEMwgDYaSfNwCgFxObRrST9pIQwdz0wLebP7DGBQelh6kDeSR3PSGVugW3lKaEkSXQwmcVFLViAmbTAEN+HJJeGoSSBUQ0wM0HT/BYl8mHXg2CCXhWyPJbxNylJZbK0m/LvQqlxAHElldeqxUN/aifNwFK36XRKl79J9HcLdFbt4X4RDEmJmD/YqKFp4Titp2GqtxCZHdIjeb8Ins76ur4vHthbiINxsNeAEXlMRJs/WxNoPFPG53TifZ4CI9nYmI7kPDvsskrkVm/KZInttRkoIene2PsOqLfAjvxaEWtKOoK6EA5JrRLRr0mHerLai+uviW+x5YOx9+15DSzlnwE2atPmoYK8I1lg1PNg2gRk1Dk2yXIAg9qflbvUOENgkqG418CybPFiP8N6mdHWMbKyHSxlmIP+hPZUygaWOTS0O31Fx8Wo+Gmfsezo6xh2MCnJwNi0RIYXSft2sNgnashjUVGXrIPpk6oxsJ/M4zLQbdk8Q2CzJpgeB2uyub/UJbTJ/FIYA7t5RS3pUbCfh9oqI5XzzBO3JAwmxT6N0vMCgh1oLDGZwtws/tMOZkTFeHzWYrBXwdhqqV86PmIx8Tg7BmYou4hgeXa+Bx4JifpPApO77Hz/ltHJ08AW0RUpG11aZk5l6RhYZutI16xP9yyYdtWvRRAyBgbhXtdCgtGDUZG/SyfAFjhBwzxLHtXIWTLVYrNs5l2wtD5fydwIkxY7NrSIYNojTvaMcwLMu/OxV4GRYw2sS/40MIHGmCdSNn3zLxbYTpw9lJTRiQbGHlUyMDkfl+JsTgYWY6WhBhaXsLw2g9ZFmuyhUFOPbFQ7YY9PjkePigRhy/hFa9o7Bqfs7tnltRn0iEybBE+cmDNj1qRHdNs1LE/OoOcrDsbBOBgH42AcjIM5g6H/gcr7Kzg/sKU1V7UyP7CAq5ofFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcX139MK3+ollb/UC35/lBxsEXTTLBi0XY2+l4MjcDu4HvY13+/MK7lWq3CxYtx1u8VfcPWhW9BpIMV7x+LuUGukPPlColBv1go5IqFxNVVo6E0EoVEwldMJC4eEomXwbPL/X21RharDAoVRVEHCUWFw4WqKs+NXrmXSNyfttSHh+Fdudyr3cHxZfbHzVPOwyAHA4YJjtpXbtQ+Aiuovvt7Jac83ScSg6LqSyhPrdW7h/L5vTqsJR6vai+J4elD8Z2HWFHxKeBEw+HQV/H5BspFv9/PwXDo+/oVH/vq++7BCkrr/FHtqS1fY6gmlFYRgxUfW4OWCmzPxcKg2Fgt3A96xdVEsayovbPEy1ltdRXAKu8NdtJT1Cvo1ZMyuFcU6NNgAGdqZTjoqU8qeNhd6/xFVftqQm0pjVYjp1SUng3MV2wolUHxYqj6Ko+P9y2f2uoVGx/V2l35ovx0pqhnyl2tV159XzBfoVZU4Y63lMHg6eVRfWoNBkpLUe/u1DsY/UPgTai9nuprqK3K+f35WUF9big5O9h9pTgcKPD9tHqfuB9ULi6KPfU8VwBA9bGwCi75MaHcvTOYb5irvBSefRf9l75v+AI3flh4rvQv+hfwH/hi5aX4/HKXe3l+acGhUOn3IHr7bGDa0MwVtW/40qiLECVZe6HIfteGpmdVtB18/9XKY5HFwRZN/wOo95D6VkV3zwAAAABJRU5ErkJggg=="
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Movie Time
          </Navbar.Brand>
          <Nav>
            <Nav.Link style={{ marginTop: "30px" }}>Home</Nav.Link>
            <Nav.Link style={{ marginTop: "30px" }} href="#favorite">
              Favourite
            </Nav.Link>
            <Nav.Link style={{ marginTop: "30px" }}>News</Nav.Link>
            <div
              style={{
                width: "400px",
                marginLeft: "450px",
                marginBottom: "10px",
              }}
            >
              <Form style={{ display: "grid" }}>
                <label className="label" htmlFor="query"></label>
                <input
                  style={{
                    borderRadius: "30px",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                  onChange={handleSearch}
                  value={searchValue}
                  placeholder="Search for movies "
                  type="text"
                />
              </Form>
              <Rate handelRate={handelRate} searchRating={searchRating} />
            </div>
          </Nav>
        </Navbar>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              height={300}
              src="https://www.megaquizz.fr/img/upload/banner_657.jpg"
              alt="Avenger"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              height={300}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgCHdkaYzBbAhEuZemlESQbs1aZ6KgqhkMKw0fdoPI-Xcdwit2wHLJWasqeTdY934Yus&usqp=CAU"
              alt="avatar"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={300}
              src="https://cdn.motor1.com/images/mgl/yKnEo/s1/fast-9-trailer.webp"
              alt="Fast and Farious"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Filter;
