export function getButtonText(pathname: string) {
  if (pathname === "/" || pathname === "/about") {
    return "Go To Store";
  }
  if (pathname === "/store") {
    return "Add to Cart";
  }
}
