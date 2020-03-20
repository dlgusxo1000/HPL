package myweb.test;

 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
 
@Controller
public class MyController {
 
    @GetMapping("/{name}.html")
    public String page(@PathVariable final String name, final Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }
 
}