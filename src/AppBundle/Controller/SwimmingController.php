<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Swimming;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Swimming controller.
 *
 * @Route("swimming")
 */
class SwimmingController extends Controller
{
    /**
     * Lists all swimming entities.
     *
     * @Route("/", name="swimming_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $swimmings = $em->getRepository('AppBundle:Swimming')->findBy(array(), array('date' => 'desc'));

        return $this->render('swimming/index.html.twig', array(
            'swimmings' => $swimmings,
        ));
    }

    /**
     * Creates a new swimming entity.
     *
     * @Route("/new", name="swimming_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $swimming = new Swimming();
        $form = $this->createForm('AppBundle\Form\SwimmingType', $swimming);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($swimming);
            $em->flush();

            return $this->redirectToRoute('swimming_show', array('id' => $swimming->getId()));
        }

        return $this->render('swimming/new.html.twig', array(
            'swimming' => $swimming,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a swimming entity.
     *
     * @Route("/show/{id}", name="swimming_show")
     * @Method("GET")
     */
    public function showAction(Swimming $swimming)
    {
        //$deleteForm = $this->createDeleteForm($swimming);
         $showForm = $this->createForm('AppBundle\Form\SwimmingType', $swimming);
        return $this->render('swimming/show.html.twig', array(
            'swimming' => $swimming,
            //'delete_form' => $deleteForm->createView(),
            'show_form' => $showForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing swimming entity.
     *
     * @Route("/edit/{id}", name="swimming_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Swimming $swimming)
    {
        //$deleteForm = $this->createDeleteForm($swimming);
        $editForm = $this->createForm('AppBundle\Form\SwimmingType', $swimming);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('swimming_show', array('id' => $swimming->getId()));
        }

        return $this->render('swimming/edit.html.twig', array(
            'swimming' => $swimming,
            'edit_form' => $editForm->createView(),
            //'delete_form' => $deleteForm->createView(),
        ));
    }

     /**
     * Deletes a swimming entity.
     *
     * @Route("/delete/{id}", name="swimming_delete")
     * @Method({"GET", "POST"})
     */
    public function deleteAction(Request $request, Swimming $swimming)
    {
        $em = $this
            ->getDoctrine()
            ->getManager();

        $swimming = $em
            ->getRepository('AppBundle:Swimming')
            ->find($swimming->getId());

        $em->remove($swimming);

        $em->flush();

        return $this->redirectToRoute('swimming_index');
    }
}
