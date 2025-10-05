import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, URL_GITHUB, URL_LINKEDIN } from "@/lib/constants";

export const contacts = [
  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Github, text: "github.com/muneeb-mp", href: URL_GITHUB },
  {
    icon: Linkedin,
    text: "linkedin.com/in/muneeb-phansopkar",
    href: URL_LINKEDIN,
  },
];
